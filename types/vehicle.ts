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
    recentVehicleInfo: {
        vehicleId: number
        vehicleNumber: string
        status: string
        lastEngineOn: string
        lastEngineOff: string
    }
    recentCycleInfo: {
        speed: number
        lat: number
        lng: number
        lastUpdated: string
    }
    todayDrivingHistory: {
        distance: number
        drivingTime: number
    }
    vehicleCompanyInfo: {
        companyName: string
    }
}

export interface VehicleStatusModel {
    allVehicles: number
    engineOnVehicles: number
    engineOffVehicles: number
}
