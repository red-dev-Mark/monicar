import { ZOOM_LEVEL } from '@/constants/map'
import { LatLng } from '@/types/location'

export interface MapState {
    // level: (typeof ZOOM_LEVEL)[keyof typeof ZOOM_LEVEL]
    level: number
    center?: LatLng
    swCoord?: LatLng | null
    neCoord?: LatLng | null
}

export type ZoomLevelValueType = (typeof ZOOM_LEVEL)[keyof typeof ZOOM_LEVEL]

// 서버 응답 클러스터링 데이터
export interface ClusterInfoModel {
    coordinate: LatLng | null
    count: number
}

// 필터링된 클러스터링 데이터 (coordinate: null 제외)
export interface ClusterPoint {
    coordinate: LatLng
    count: number
}

// 경로 개별 데이터
export interface VehicleRoutePoint {
    lat: number
    lng: number
    spd: number
    timestamp: string
}
