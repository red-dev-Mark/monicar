export const INITIAL_MAP_STATE = {
    center: {
        lat: 36.5,
        lng: 127.5,
    },
    level: 12,
}

export const MARKER_IMAGE = {
    src: '/icons/red-car-icon.svg',
    size: {
        width: 96,
        height: 96,
    },
    options: {
        offset: {
            x: 48,
            y: 48,
        },
    },
} as const

export const ZOOM_LEVEL = {
    SINGLE_VEHICLE: 7,
} as const
