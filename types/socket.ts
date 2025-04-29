import { SOCKET_SUBSCRIPTION } from '@/constants/socket'

export type SocketSubscriptionType = (typeof SOCKET_SUBSCRIPTION)[keyof typeof SOCKET_SUBSCRIPTION]
