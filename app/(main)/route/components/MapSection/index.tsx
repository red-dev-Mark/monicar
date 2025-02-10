'use client'

import { Polyline } from 'react-kakao-maps-sdk'

import Map from '@/components/domain/map/Map'
import { POLYLINE_CONFIG } from '@/constants/map'
import { MapState, LatLng } from '@/types/map'

interface MapSectionProps {
    mapState: MapState
    vehiclePaths: LatLng[]
}

const MapSection = ({ mapState, vehiclePaths }: MapSectionProps) => {
    return (
        <Map level={mapState.level} center={mapState.center}>
            <Polyline
                path={[vehiclePaths]}
                strokeWeight={POLYLINE_CONFIG.STROKE_WEIGHT}
                strokeColor={POLYLINE_CONFIG.STROKE_COLOR}
                strokeOpacity={POLYLINE_CONFIG.STROKE_OPACITY}
                strokeStyle={POLYLINE_CONFIG.STROKE_STYLE}
            />
        </Map>
    )
}

export default MapSection
