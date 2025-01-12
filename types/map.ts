import { ZOOM_LEVEL } from '@/constants/map'
import { LatLng } from '@/types/location'

export interface MapState {
    center: LatLng
    level: (typeof ZOOM_LEVEL)[keyof typeof ZOOM_LEVEL]
}

export type ZoomLevelValueType = (typeof ZOOM_LEVEL)[keyof typeof ZOOM_LEVEL]
