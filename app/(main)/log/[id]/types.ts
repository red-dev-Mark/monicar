import { OperationStatusType } from '@/types/log'

interface BusinessInfo {
    businessName: string
    businessRegistrationNumber: string
}

interface VehicleInfo {
    vehicleNumber: string
    vehicleModel: string
    status: OperationStatusType
}

interface BusinessDrivingDetails {
    usePurpose: 'NORMAL' | 'COMMUTE'
    drivingDistance: number
}

interface DrivingInfo {
    drivingBefore: number
    drivingAfter: number
    totalDriving: number
    businessDrivingDetails: BusinessDrivingDetails
    notes: string
}

interface User {
    departmentName: string
    name: string
}

export interface DrivingRecord {
    id: number
    usageDate: string
    user: User
    drivingInfo: DrivingInfo
}

export interface DetailResponse {
    taxStartPeriod: string
    taxEndPeriod: string
    businessInfo: BusinessInfo
    taxPeriodDistance: number
    taxPeriodBusinessDistance: number
    businessUseRatio: number
    vehicleInfo: VehicleInfo
    records: DrivingRecord[]
}
