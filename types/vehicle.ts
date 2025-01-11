import { LatLng } from '@/types/location'

export interface singleVehicleModel {
    vehicleId: string
    vehicleNumber: string
    status: string
    location: LatLng
}

export interface vehicleDateModel {
    vehicleId: string
    vehicleNumber: string
    searchableDate: {
        firstDateAt: string
        lastDateAt: string
    }
}
