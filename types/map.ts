// 위도, 경도 좌표
export interface LatLng {
    lat: number
    lng: number
}

// 지도의 현재 상태
export interface MapState {
    level: number
    center?: LatLng
    swCoord?: LatLng | null
    neCoord?: LatLng | null
}
