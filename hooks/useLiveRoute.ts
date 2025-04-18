import { Client } from '@stomp/stompjs'
import { useCallback, useEffect, useRef, useState } from 'react'
import SockJS from 'sockjs-client'

// import { LIVE_ROUTE_CONFIG } from '@/constants/map'
import { SOCKET_TOPIC_URL } from '@/constants/api'
import { calculateAngle } from '@/lib/utils/math'
import { normalizeCoordinate } from '@/lib/utils/normalize'
import { Route } from '@/types/route'

export const useLiveRoute = () => {
    const [nextLocation, setNextLocation] = useState<Route | null>(null)
    const [currentLocation, setCurrentLocation] = useState<Route | null>(null)
    const [_vehicleId, setVehicleId] = useState('')
    const [isTracking, setIsTracking] = useState(false)

    // console.log('render')
    // console.log('currentLocation: ', currentLocation, 'nextLocation: ', nextLocation)

    const stompClientRef = useRef<Client | null>(null)

    const connectSocket = useCallback((vehicleId: string) => {
        if (stompClientRef.current && stompClientRef.current.connected) {
            disconnectSocket()
        }

        const client = new Client({
            webSocketFactory: () => new SockJS(`${process.env.NEXT_PUBLIC_SOCKET_URL}/ws`),
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
        })

        client.onConnect = () => {
            console.log('소켓 연결 성공')

            client.subscribe(SOCKET_TOPIC_URL.singleVehicle(vehicleId), (message) => {
                try {
                    const location = JSON.parse(message.body)

                    console.log('currentLocation: ', currentLocation)

                    const normalizedLocation = {
                        ...location,
                        lat: normalizeCoordinate(location.lat),
                        lng: normalizeCoordinate(location.lng),
                    }

                    const angle = calculateAngle(nextLocation!, currentLocation!)

                    setNextLocation(currentLocation)
                    // console.log('angle', angle)

                    setCurrentLocation(() => ({
                        ...normalizedLocation,
                        ang: angle,
                    }))
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

    const startLiveTracking = (vehicleId: string) => {
        setIsTracking(true)
        setVehicleId(vehicleId)
        connectSocket(vehicleId) // 소켓 연결 시작
    }

    const stopLiveTracking = () => {
        setIsTracking(false)
        setVehicleId('')
        disconnectSocket() // 소켓 연결 해제
        // setLiveRoutes([])
        // setLiveRoutes(null)
        setCurrentLocation(null)
    }

    // 컴포넌트 언마운트 시 소켓 연결 해제
    useEffect(() => {
        return () => {
            disconnectSocket()
        }
    }, [disconnectSocket])

    return {
        // initialLiveRoute: liveRoutes[0],
        // initialLiveRoute: liveRoutes,
        currentLocation,
        isTracking,
        startLiveTracking,
        stopLiveTracking,
    }
}
