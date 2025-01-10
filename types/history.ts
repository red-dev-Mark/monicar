export interface ListItemModel {
    id: number
    vehicleNumber: string
    department: string
    name: string
    drivingDays: number
    averageDrivingDistance: number
    averageDrivingTime: number
    totalDrivingDistance: number
    drivingRate: React.ReactNode
    icon: React.ReactNode
}
