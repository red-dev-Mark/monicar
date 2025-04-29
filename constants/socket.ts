export const SOCKET_TOPIC_URL = {
    singleVehicle: (vehicleId: string) => `/topic/car/${vehicleId}`,
    allVehicles: `/topic/car/all`,
}

export const SOCKET_SUBSCRIPTION = {
    SINGLE_VEHICLE: 'single_vehicle',
    ALL_VEHICLES: 'all_vehicles',
} as const
