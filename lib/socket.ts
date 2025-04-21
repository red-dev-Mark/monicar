import { Client } from '@stomp/stompjs'
import { useCallback, useEffect, useRef, useState } from 'react'
import SockJS from 'sockjs-client'

import { SOCKET_TOPIC_URL } from '@/constants/api'
import { normalizeCoordinate } from '@/lib/utils/normalize'
import { Route } from '@/types/route'

export const socket = () => {
    const [isTracking, setIsTracking] = useState(false)

    const [currentLocation, setCurrentLocation] = useState<Route | null>(null)
    const [currentLocations, setCurrentLocations] = useState<Route[] | null>(null)

    const stompClientRef = useRef<Client | null>(null)

    // let isConnect = false

    const connectSocket = useCallback((vehicleId: string = 'all') => {
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

            // client.subscribe(topic, callback)

            client.subscribe(SOCKET_TOPIC_URL.singleVehicle(vehicleId), (message) => {
                try {
                    const location = JSON.parse(message.body)

                    const normalizedLocation = {
                        ...location,
                        lat: normalizeCoordinate(location.lat),
                        lng: normalizeCoordinate(location.lng),
                    }

                    setCurrentLocation(normalizedLocation)
                } catch (error) {
                    console.error('소켓 메시지 처리 실패:', error)
                }
            })

            client.subscribe(SOCKET_TOPIC_URL.allVehicles, (message) => {
                try {
                    const locations = JSON.parse(message.body).map((item: string) => JSON.parse(item))

                    const normalizedLocations = locations.map((location: Route) => {
                        return {
                            ...location,
                            lat: normalizeCoordinate(location.lat),
                            lng: normalizeCoordinate(location.lng),
                        }
                    })

                    setCurrentLocations(normalizedLocations)
                } catch (error) {
                    console.error('소켓 메시지 처리 실패:', error)
                }
            })
        }

        // 소켓 오류 처리
        client.onStompError = (frame) => {
            console.error('Stomp 오류:', frame.headers['message'])
        }

        // 소연결 시작
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
        connectSocket(vehicleId) // 소켓 연결 시작
    }

    const stopLiveTracking = () => {
        setIsTracking(false)
        disconnectSocket() // 소켓 연결 해제
        // setLiveRoutes([])
        // setLiveRoutes(null)
        setCurrentLocations(null)
    }

    // 컴포넌트 언마운트 시 소켓 연결 해제
    useEffect(() => {
        return () => {
            disconnectSocket()
        }
    }, [disconnectSocket])

    return {
        connectSocket,
        disconnectSocket,
        currentLocation,
        currentLocations,
        isTracking,
        startLiveTracking,
        stopLiveTracking,
    }
}
