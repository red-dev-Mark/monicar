'use client'

import { memo } from 'react'
import { Polyline } from 'react-kakao-maps-sdk'

import Map from '@/components/domain/map/Map'
import { POLYLINE_CONFIG } from '@/constants/map'
import { MapState, LatLng, MapRefType } from '@/types/map'

interface MapSectionProps {
    mapRef: MapRefType
    mapState: MapState
    routes: LatLng[]
    onLoad?: () => void
}

const MapSection = memo(({ mapRef, mapState, routes, onLoad }: MapSectionProps) => {
    return (
        <Map ref={mapRef} level={mapState.level} center={mapState.center} onLoad={onLoad}>
            <Polyline
                path={[routes]}
                strokeWeight={POLYLINE_CONFIG.STROKE_WEIGHT}
                strokeColor={POLYLINE_CONFIG.STROKE_COLOR}
                strokeOpacity={POLYLINE_CONFIG.STROKE_OPACITY}
                strokeStyle={POLYLINE_CONFIG.STROKE_STYLE}
            />
        </Map>
    )
})

MapSection.displayName = 'MapSection'

export default MapSection
