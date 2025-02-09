export const MAP_CONFIG = {
    ZOOM: {
        MAX: 1,
        MIN: 13,
    },
    INIT: {
        level: 12,
        center: { lat: 36.5, lng: 127.5 },
    },
    SEARCH_VEHICLE: {
        ZOOM_INCREMENT: 7,
    },
    CLUSTER: {
        VISIBLE_LEVEL: 4,
        ZOOM_INCREMENT: 2,
    },
    ROUTE: {
        ZOOM_INCREMENT: 8,
    },
} as const

export const MAP_BOUNDS = {
    SW_LAT: 32.565491,
    SW_LNG: 120.637522,
    NE_LAT: 38.875321,
    NE_LNG: 135.513156,
} as const

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
