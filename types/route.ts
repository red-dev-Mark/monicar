import { DatesRangeValue } from '@mantine/dates'

import { LatLng } from '@/types/map'

// 차량의 운행 경로 정보
export interface Route {
    lat: number
    lng: number
    ang?: number
    spd?: number
    timestamp: string
}

export interface RouteState {
    vehicleId: string
    vehicleNumber: string
    dateRange: DatesRangeValue
    routes: LatLng[]
    firstOperationDate: string | null
    lastOperationDate: string | null
}
