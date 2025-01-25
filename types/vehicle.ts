export interface VehicleInfoModel {
    vehicleId: string
    vehicleNumber: string
    recentCycleInfo: RecentCycleInfo
    status: string
}

interface RecentCycleInfo {
    speed: number
    lat: number
    lng: number
    lastUpdated: string
}

export interface VehicleDateModel {
    vehicleId: string
    vehicleNumber: string
    searchableDates: {
        firstDateAt: string
        lastDateAt: string
    }
}

export interface VehicleDetailsModel {
    department: string
    vehicleId: string
    vehicleNumber: string
    driverName: string
    status: {
        type: VehicleStatusType
        speed: number
        lastEngineOn: string
        lastEngineOff: string
    }
    dailyStatus: {
        distance: number
        drivingTime: number
    }
    location: {
        lat: number
        lng: number
        lastUpdated: string
    }
}

export type VehicleStatusType = 'ON' | 'OFF'
