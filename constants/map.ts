import { vars } from '@/styles/theme.css'

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
        ZOOM_INCREMENT: 4,
    },
    CLUSTER: {
        VISIBLE_LEVEL: 5,
        ZOOM_INCREMENT: 2,
    },
    ROUTE: {
        ZOOM_INCREMENT: 10,
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

export const POLYLINE_CONFIG = {
    STROKE_WEIGHT: 5,
    STROKE_COLOR: vars.colors.primary,
    STROKE_OPACITY: 1,
    STROKE_STYLE: 'solid',
} as const
