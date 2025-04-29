import { Client } from '@stomp/stompjs'
import { useCallback, useEffect, useRef, useState } from 'react'
import SockJS from 'sockjs-client'

import { SOCKET_SUBSCRIPTION, SOCKET_TOPIC_URL } from '@/constants/socket'
import { normalizeCoordinate } from '@/lib/utils/normalize'
import { LiveRoute } from '@/types/route'
import { SocketSubscriptionType } from '@/types/socket'

export const useLiveRoute = () => {
    const [isTracking, setIsTracking] = useState(false)

    const [liveLocation, setLiveLocation] = useState<LiveRoute | null>(null)
    const [liveLocations, setLiveLocations] = useState<LiveRoute[] | null>(null)

    const stompClientRef = useRef<Client | null>(null)

    const connectSocket = useCallback((sub: SocketSubscriptionType, vehicleId?: string) => {
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

            switch (sub) {
                case SOCKET_SUBSCRIPTION.SINGLE_VEHICLE:
                    subSingleVehicle()
                    break
                case SOCKET_SUBSCRIPTION.ALL_VEHICLES:
                    subAllVehicles()
                    break
                default:
            }

            function subSingleVehicle() {
                if (!vehicleId) return
                client.subscribe(SOCKET_TOPIC_URL.singleVehicle(vehicleId), (message) => {
                    try {
                        console.log('1대 차량 구독 성공')
                        const location = JSON.parse(message.body)

                        const normalizedLocation = {
                            ...location,
                            lat: normalizeCoordinate(location.lat),
                            lng: normalizeCoordinate(location.lng),
                        }

                        setLiveLocation(normalizedLocation)
                    } catch (error) {
                        console.error('소켓 메시지 처리 실패:', error)
                    }
                })
            }

            function subAllVehicles() {
                client.subscribe(SOCKET_TOPIC_URL.allVehicles, (message) => {
                    try {
                        console.log('모든 차량 구독 성공')
                        const locations = JSON.parse(message.body).map((item: string) => JSON.parse(item))

                        const normalizedLocations = locations.map((location: LiveRoute) => {
                            return {
                                ...location,
                                lat: normalizeCoordinate(location.lat),
                                lng: normalizeCoordinate(location.lng),
                            }
                        })

                        setLiveLocations(normalizedLocations)
                    } catch (error) {
                        console.error('소켓 메시지 처리 실패:', error)
                    }
                })
            }
        }

        // 소켓 연결 시작
        client.activate()
        stompClientRef.current = client

        // 소켓 오류 처리
        client.onStompError = (frame) => {
            console.error('Stomp 오류:', frame.headers['message'])
            stompClientRef.current = null
        }
    }, [])

    // 소켓 연결 해제 함수
    const disconnectSocket = useCallback(() => {
        if ((stompClientRef.current && stompClientRef.current.connected) || stompClientRef.current?.active) {
            stompClientRef.current.deactivate()
            console.log('소켓 연결 해제')
        }
    }, [])

    const startLiveTracking = (sub: SocketSubscriptionType, vehicleId: string) => {
        setIsTracking(true)
        connectSocket(sub, vehicleId) // 소켓 연결 시작
    }

    const stopLiveTracking = () => {
        setIsTracking(false)
        disconnectSocket() // 소켓 연결 해제
        setLiveLocation(null)
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
        liveLocation,
        liveLocations,
        isTracking,
        startLiveTracking,
        stopLiveTracking,
    }
}
