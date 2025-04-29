import { Client } from '@stomp/stompjs'
import SockJS from 'sockjs-client'

import { SOCKET_CONFIG, SOCKET_SUBSCRIPTION, SOCKET_URL } from '@/constants/socket'
import { SocketSubscriptionType } from '@/types/socket'

const state = {
    client: null as Client | null,
    isConnected: false,
}

const connect = (sub: SocketSubscriptionType, callback: (location: string) => void, vehicleId?: string) => {
    if (state?.isConnected) {
        disconnect()
    }

    const client = new Client({
        webSocketFactory: () => new SockJS(`${SOCKET_URL.BASE}/ws`),
        reconnectDelay: SOCKET_CONFIG.RECONNECT_DELAY,
        heartbeatIncoming: SOCKET_CONFIG.HEARTBEAT.INCOMING,
        heartbeatOutgoing: SOCKET_CONFIG.HEARTBEAT.OUTGOING,
    })

    client.onConnect = () => {
        console.log('s-connect')

        const topicUrl =
            sub === SOCKET_SUBSCRIPTION.ALL_VEHICLES
                ? SOCKET_URL.TOPIC.allVehicles
                : vehicleId
                  ? SOCKET_URL.TOPIC.singleVehicle(vehicleId)
                  : null

        if (!topicUrl) return

        client.subscribe(topicUrl, (message) => {
            try {
                console.log(sub)
                callback?.(message.body)
            } catch (error) {
                console.error('소켓 메시지 처리 실패: ', error)
            }
        })
    }

    client.activate()
    state.client = client

    client.onStompError = () => {
        console.error('소켓 연결 오류')
        state.client = null
    }
}

const disconnect = () => {
    if ((state.client && state.isConnected) || state.client?.active) {
        state.client.deactivate()
        console.log('s-disconnect')
    }
    state.client = null
    state.isConnected = false
}

export const socket = {
    connect,
    disconnect,
}
