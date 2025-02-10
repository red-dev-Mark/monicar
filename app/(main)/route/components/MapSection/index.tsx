'use client'

import { Polyline } from 'react-kakao-maps-sdk'

import Map from '@/components/domain/map/Map'
import { vars } from '@/styles/theme.css'
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
                strokeWeight={5}
                strokeColor={vars.colors.primary}
                strokeOpacity={1}
                strokeStyle={'solid'}
            />
        </Map>
    )
}

export default MapSection
