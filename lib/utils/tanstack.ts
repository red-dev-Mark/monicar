export const queryKeys = {
    vehicle: {
        status: ['vehicle-status'],
    },
    route: {},
    notice: {},
} as const

export const minutesToStaleTime = (minute: number): number => minute * 60 * 1000
