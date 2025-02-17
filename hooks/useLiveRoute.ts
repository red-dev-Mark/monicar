import { useCallback, useEffect, useState } from 'react'

import { routeService } from '@/lib/apis'
import { calculateAngle } from '@/lib/utils/math'
import { normalizeCoordinate } from '@/lib/utils/normalize'
import { Route } from '@/types/route'

export const useLiveRoute = () => {
    const [currentRoute, setCurrentRoute] = useState<Route>()
    const [liveRoutes, setLiveRoutes] = useState<Route[]>([])

    const getLiveRouteData = useCallback(async (vehicleId: string) => {
        try {
            const result = await routeService.getVehicleLiveRoutes(vehicleId)
            const normalized = result.routes.map((route: Route) => {
                return {
                    ...route,
                    lat: normalizeCoordinate(route.lat),
                    lng: normalizeCoordinate(route.lng),
                }
            })
            setLiveRoutes(normalized)
            setCurrentRoute(normalized[0])
        } catch (error) {
            console.error('실시간 경로 데이터 조회 실패:', error)
        }
    }, [])

    const lerp = (start: number, end: number, time: number) => {
        return start + (end - start) * time
    }

    useEffect(() => {
        if (liveRoutes.length === 0) return

        let index = 0
        let progress = 0
        const ANIMATION_DURATION = 1000
        const FRAME_RATE = 60
        const STEP = 1000 / FRAME_RATE / ANIMATION_DURATION

        const interval = setInterval(() => {
            const currentRoute = liveRoutes[index]
            const nextRoute = liveRoutes[(index + 1) % liveRoutes.length]

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
                index = (index + 1) % liveRoutes.length
            }
        }, 1000 / FRAME_RATE)

        return () => clearInterval(interval)
    }, [liveRoutes, calculateAngle])

    return {
        currentRoute,
        getLiveRouteData,
    }
}
