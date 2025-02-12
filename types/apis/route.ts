// 운행 경로 조회 시 필요 요청 데이터
export interface RouteRequest {
    vehicleId: string
    dateRange: (Date | null)[]
    interval?: number
}

// 운행 경로 조회 시 필요 파라미터
export interface RouteParams {
    startTime: string
    endTime: string
    interval: number
}

// 경로 상세 정보 조회 시 필요 요청 데이터
export interface RouteDetailRequest extends RouteDetailParams {
    vehicleId: string
}

// 경로 상세 정보 조회 시 필요 파라미터
export interface RouteDetailParams {
    startTime: string
    endTime: string
    page: number
    interval?: number
}

// 실시간 경로 조회 시 필요 파라미터
export interface LiveRouteParams {
    currentTime: string
}
