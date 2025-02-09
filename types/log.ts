export interface LogListItemModel {
    id: number
    vehicleNumber: string
    vehicleModel: string
    drivingDays: number
    totalDistance: number
    status: OperationStatusType
}

export type OperationStatusType = 'NOT_REGISTERED' | 'NOT_DRIVEN' | 'IN_OPERATION'
