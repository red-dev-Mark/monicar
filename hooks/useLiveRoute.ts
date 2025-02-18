import { useCallback, useEffect, useState } from 'react'

import { LIVE_ROUTE_CONFIG } from '@/constants/map'
import { routeService } from '@/lib/apis'
import { calculateAngle } from '@/lib/utils/math'
import { normalizeCoordinate } from '@/lib/utils/normalize'
import { Route } from '@/types/route'

export const useLiveRoute = () => {
    const [currentRoute, setCurrentRoute] = useState<Route>()
    const [liveRoutes, setLiveRoutes] = useState<Route[]>([])
    const [vehicleId, setVehicleId] = useState('')
    const [isTracking, setIsTracking] = useState(false)

    const getLiveRouteData = useCallback(
        async (vehicleId: string) => {
            try {
                const result = await routeService.getVehicleLiveRoutes(vehicleId)
                if (!result.data) throw new Error(result.error)

                const { routes } = result.data

                const normalized = routes.map((route: Route) => {
                    return {
                        ...route,
                        lat: normalizeCoordinate(route.lat),
                        lng: normalizeCoordinate(route.lng),
                    }
                })

                const uniqueRoutes = new Map<string, Route>(normalized.map((route: Route) => [route.timestamp, route]))
                setLiveRoutes([...uniqueRoutes.values()])
                setCurrentRoute(normalized[0])
            } catch (error) {
                console.error('실시간 경로 데이터 조회 실패:', error)
            }
        },
        [vehicleId],
    )

    const lerp = (start: number, end: number, time: number) => {
        return start + (end - start) * time
    }

    const startLiveTracking = (vehicleId: string) => {
        setIsTracking(true)
        setVehicleId(vehicleId)
        getLiveRouteData(vehicleId)
    }

    const stopLiveTracking = () => {
        setIsTracking(false)
        setVehicleId('')
        setLiveRoutes([])
        setCurrentRoute(undefined)
    }

    useEffect(() => {
        if (!isTracking || !vehicleId) return

        const fetchInterval = setInterval(() => {
            getLiveRouteData(vehicleId)
        }, LIVE_ROUTE_CONFIG.REQUEST_TERM)

        return () => clearInterval(fetchInterval)
    }, [vehicleId, isTracking, getLiveRouteData])

    useEffect(() => {
        if (!isTracking || liveRoutes.length === 0) return

        let index = 0
        let progress = 0
        const STEP = 1000 / LIVE_ROUTE_CONFIG.FRAME_RATE / LIVE_ROUTE_CONFIG.ANIMATION_DURATION

        const interval = setInterval(() => {
            if (index >= liveRoutes.length - 1 && progress >= 1) {
                clearInterval(interval)
                return
            }

            const currentRoute = liveRoutes[index]
            const nextRoute = liveRoutes[index + 1]

            if (!nextRoute) return

            const interpolatedLat = lerp(currentRoute.lat, nextRoute.lat, progress)
            const interpolatedLng = lerp(currentRoute.lng, nextRoute.lng, progress)

            const angle = calculateAngle(currentRoute, nextRoute)
            setCurrentRoute({
                ...currentRoute,
                lat: interpolatedLat,
                lng: interpolatedLng,
                ang: angle,
            })

            progress += STEP

            if (progress >= 1) {
                progress = 0
                if (index < liveRoutes.length - 1) {
                    index++
                }
            }
        }, 1000 / LIVE_ROUTE_CONFIG.FRAME_RATE)

        return () => clearInterval(interval)
    }, [liveRoutes, isTracking])

    return {
        currentRoute,
        isTracking,
        startLiveTracking,
        stopLiveTracking,
    }
}
