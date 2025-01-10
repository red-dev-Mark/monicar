import { LatLng } from '@/types/location'

export interface singleVehicleModel {
    vehicleId: string
    vehicleNumber: string
    status: string
    location: LatLng
}
