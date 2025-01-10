export interface ListItemModel {
    id: number
    vehicleNumber: string
    vehicleModel: string
    status: VehicleStatusType
}

type VehicleStatusType = '운행중' | '미운행' | '미관제'
