export const SOCKET_URL = {
    BASE: process.env.NEXT_PUBLIC_SOCKET_URL,
    TOPIC: {
        singleVehicle: (vehicleId: string) => `/topic/car/${vehicleId}`,
        allVehicles: `/topic/car/all`,
    },
}

export const SOCKET_SUBSCRIPTION = {
    SINGLE_VEHICLE: 'single_vehicle',
    ALL_VEHICLES: 'all_vehicles',
} as const

export const SOCKET_CONFIG = {
    RECONNECT_DELAY: 5000,
    HEARTBEAT: {
        INCOMING: 4000,
        OUTGOING: 4000,
    },
}
