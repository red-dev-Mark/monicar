export interface LogListItemModel {
    id: number
    vehicleNumber: string
    vehicleModel: string
    drivingDays: number
    totalDistance: number
    status: OperationStatusType
}

export type OperationStatusType = 'NOT_REGISTERED' | 'NOT_DRIVEN' | 'IN_OPERATION'

export interface DailyResponse {
    isSuccess: boolean
    message: string
    result: DailyListItemModel[]
}

export interface DailyListItemModel {
    drivingDate: string
    totalDistance: number
    totalDrivingSeconds: number
}

export type DailyLogPeriodType = 'WEEK' | 'MONTH' | 'THREE_MONTHS'

export interface HourlyResponse {
    isSuccess: boolean
    message: string
    result: HourlyListItemModel[]
}

export interface HourlyListItemModel {
    startTime: string
    endTime: number
    drivingDistance: number
    lat: number
    lng: number
}
