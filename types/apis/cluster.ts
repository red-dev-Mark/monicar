// 서버에서 받은 클러스터 정보
export interface ClusterInfo {
    lat: number
    lng: number
    count: number
}

export interface ClusterDetail {
    vehicleNumber: string
    vehicleId: number
    lat: number
    lng: number
}
