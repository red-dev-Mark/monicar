import { ZOOM_LEVEL } from '@/constants/map'
import { LatLng } from '@/types/location'

export interface MapState {
    // level: (typeof ZOOM_LEVEL)[keyof typeof ZOOM_LEVEL]
    level: number
    center?: LatLng
    swCoord?: LatLng | null
    neCoord?: LatLng | null
}

export type ZoomLevelValueType = (typeof ZOOM_LEVEL)[keyof typeof ZOOM_LEVEL]
