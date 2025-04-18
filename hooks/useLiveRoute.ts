import { Client } from '@stomp/stompjs'
import { useCallback, useEffect, useRef, useState } from 'react'
import SockJS from 'sockjs-client'

// import { LIVE_ROUTE_CONFIG } from '@/constants/map'
import { calculateAngle } from '@/lib/utils/math'
import { normalizeCoordinate } from '@/lib/utils/normalize'
import { Route } from '@/types/route'

export const useLiveRoute = () => {
    const [previousLiveRoute, setPreviousLiveRoute] = useState<Route | null>(null)
    const [currentLiveRoute, setCurrentLiveRoute] = useState<Route | null>(null)
    // const [liveRoutes, setLiveRoutes] = useState<Route[]>([])
    const [liveRoutes, setLiveRoutes] = useState<Route | null>(null)
    const [_vehicleId, setVehicleId] = useState('')
    const [isTracking, setIsTracking] = useState(false)

    // console.log('render')
    console.log('currentLiveRoute: ', currentLiveRoute, 'previousLiveRoute: ', previousLiveRoute)

    // Stomp 클라이언트 레퍼런스
    const stompClientRef = useRef<Client | null>(null)

    // 소켓 연결 함수
    const connectSocket = useCallback((vehicleId: string) => {
        if (stompClientRef.current && stompClientRef.current.connected) {
            // 이미 연결되어 있으면 기존 구독 해제
            disconnectSocket()
        }

        // 새 STOMP 클라이언트 생성
        const client = new Client({
            // brokerURL 대신 webSocketFactory 사용
            webSocketFactory: () => {
                // SockJS 사용 (일반적으로 /ws 또는 /socket과 같은 경로 사용)
                return new SockJS(`${process.env.NEXT_PUBLIC_SOCKET_URL}/ws`)
            },
            connectHeaders: {
                // 필요한 경우 헤더 추가
            },
            // debug(str) {
            //     console.log('STOMP: ' + str)
            // },
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
        })

        // 연결 성공 시 콜백
        client.onConnect = () => {
            console.log('소켓 연결 성공')

            // 특정 차량의 실시간 경로 구독
            // client.subscribe(`/topic/car/all`, (message) => {
            client.subscribe(`/topic/car/${vehicleId}`, (message) => {
                // client.subscribe(`/topic/vehicle/${vehicleId}/routes`, (message) => {
                try {
                    const routes = JSON.parse(message.body)

                    // console.log(routes)
                    // console.log('routes', routes)

                    // const normalized = routes.map((route: Route) => {
                    //     return {
                    //         ...route,
                    //         lat: normalizeCoordinate(route.lat),
                    //         lng: normalizeCoordinate(route.lng),
                    //     }
                    // })

                    const normalizedRoutes = {
                        ...routes,
                        lat: normalizeCoordinate(routes.lat),
                        lng: normalizeCoordinate(routes.lng),
                    }

                    // console.log('normalizedRoutes', normalizedRoutes)
                    const angle = calculateAngle(previousLiveRoute!, currentLiveRoute!)

                    console.log('angle', angle)

                    setCurrentLiveRoute(() => ({
                        ...normalizedRoutes,
                        ang: angle,
                    }))

                    setPreviousLiveRoute(currentLiveRoute)
                    // setLiveRoutes(routes)
                    // const uniqueRoutes = new Map<string, Route>(
                    //     normalized.map((route: Route) => [route.timestamp, route]),
                    // )
                    // console.log('uniqueRoutes', uniqueRoutes)
                    // setLiveRoutes([...uniqueRoutes.values()])

                    // if (normalized.length > 0) {
                    //     setCurrentLiveRoute(normalized[0])
                    // }
                    // if (normalizedRoutes.length > 0) {
                    //     setCurrentLiveRoute(normalizedRoutes[0])
                    // }
                } catch (error) {
                    console.error('소켓 메시지 처리 실패:', error)
                }
            })
        }

        // 오류 처리
        client.onStompError = (frame) => {
            console.error('Stomp 오류:', frame.headers['message'])
            console.error('추가 상세:', frame.body)
        }

        // 연결 시작
        client.activate()
        stompClientRef.current = client
    }, [])

    // 소켓 연결 해제 함수
    const disconnectSocket = useCallback(() => {
        if (stompClientRef.current && stompClientRef.current.connected) {
            stompClientRef.current.deactivate()
            console.log('소켓 연결 해제')
        }
    }, [])

    // const lerp = (start: number, end: number, time: number) => {
    //     return start + (end - start) * time
    // }

    const startLiveTracking = (vehicleId: string) => {
        setIsTracking(true)
        setVehicleId(vehicleId)
        console.log('소켓 연결 시작')
        connectSocket(vehicleId) // 소켓 연결 시작
    }

    const stopLiveTracking = () => {
        setIsTracking(false)
        setVehicleId('')
        disconnectSocket() // 소켓 연결 해제
        // setLiveRoutes([])
        setLiveRoutes(null)
        setCurrentLiveRoute(null)
    }

    // 컴포넌트 언마운트 시 소켓 연결 해제
    useEffect(() => {
        return () => {
            disconnectSocket()
        }
    }, [disconnectSocket])

    // 애니메이션 처리 로직
    // useEffect(() => {
    //     // if (!isTracking || liveRoutes.length === 0) return
    //     if (!isTracking || liveRoutes) return

    //     let index = 0
    //     let progress = 0
    //     const STEP = 1000 / LIVE_ROUTE_CONFIG.FRAME_RATE / LIVE_ROUTE_CONFIG.ANIMATION_DURATION

    //     const interval = setInterval(() => {
    //         // if (index >= liveRoutes.length - 1 && progress >= 1) {
    //         if (index >= liveRoutes.length - 1 && progress >= 1) {
    //             clearInterval(interval)
    //             return
    //         }

    //         const currentRoute = liveRoutes[index]
    //         const nextRoute = liveRoutes[index + 1]

    //         if (!nextRoute) return

    //         const interpolatedLat = lerp(currentRoute.lat, nextRoute.lat, progress)
    //         const interpolatedLng = lerp(currentRoute.lng, nextRoute.lng, progress)

    //         const angle = calculateAngle(currentRoute, nextRoute)
    //         setCurrentLiveRoute({
    //             ...currentRoute,
    //             lat: interpolatedLat,
    //             lng: interpolatedLng,
    //             ang: angle,
    //         })

    //         progress += STEP

    //         if (progress >= 1) {
    //             progress = 0
    //             if (index < liveRoutes.length - 1) {
    //                 index++
    //             }
    //         }
    //     }, 1000 / LIVE_ROUTE_CONFIG.FRAME_RATE)

    //     return () => clearInterval(interval)
    // }, [liveRoutes, isTracking])

    return {
        // initialLiveRoute: liveRoutes[0],
        initialLiveRoute: liveRoutes,
        currentLiveRoute,
        isTracking,
        startLiveTracking,
        stopLiveTracking,
    }
}
