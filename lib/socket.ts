import { Client } from '@stomp/stompjs'
import SockJS from 'sockjs-client'

import { SOCKET_CONFIG, SOCKET_SUBSCRIPTION, SOCKET_URL } from '@/constants/socket'
import { SocketSubscriptionType } from '@/types/socket'

const state = {
    client: null as Client | null,
    isConnected: false,
    params: null as {
        sub: SocketSubscriptionType
        callback: (location: string) => void
        connectStatus: (status: string) => void
        vehicleId?: string
    } | null,
}

const connect = (
    sub: SocketSubscriptionType,
    callback: (location: string) => void,
    connectStatus: (status: string) => void,
    vehicleId?: string,
) => {
    state.params = { sub, callback, connectStatus, vehicleId }
    if (state?.isConnected) {
        disconnect()
    }

    connectStatus('pending')

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

    client.onStompError = () => {
        console.error('소켓 연결 오류')
        state.client = null

        reconnect()
    }

    state.isConnected = true
    state.client = client
    client.activate()
}

const reconnect = () => {
    disconnect()
    if (state.params) {
        const { sub, callback, connectStatus, vehicleId } = state.params
        setTimeout(() => {
            connect(sub, callback, connectStatus, vehicleId)
        }, 500)
    }
}

const disconnect = () => {
    if (state.client) {
        if (state.client.active) {
            state.client.deactivate()
            console.log('s-disconnect')
        }
        state.client = null
    }
    state.isConnected = false
    state?.params?.connectStatus('idle')
}

export const socket = {
    connect,
    disconnect,
}
