'use client'

import { useSearchParams } from 'next/navigation'
import { memo } from 'react'
import { Polyline } from 'react-kakao-maps-sdk'

import Map from '@/components/domain/map/Map'
import VehicleMarker from '@/components/domain/vehicle/VehicleMarker'
import { POLYLINE_CONFIG } from '@/constants/map'
import { useMapStatus } from '@/hooks/useMapStatus'
import { LatLng, MapRefType } from '@/types/map'

interface MapSectionProps {
    mapRef: MapRefType
    routes: LatLng[]
}

const MapSection = memo(({ mapRef, routes }: MapSectionProps) => {
    const { mapState } = useMapStatus(mapRef.current)

    const searchParams = useSearchParams()

    const vehicleNumber = searchParams.get('vehicleNumber') || ''
    const lat = Number(searchParams.get('endLat'))
    const lng = Number(searchParams.get('endLng'))

    const vehicleOnDestination = {
        vehicleNumber,
        coordinate: { lat, lng },
    }

    const isVisible = routes.length > 0

    return (
        <Map ref={mapRef} level={mapState.level} center={mapState.center}>
            <Polyline
                path={[routes]}
                strokeWeight={POLYLINE_CONFIG.STROKE_WEIGHT}
                strokeColor={POLYLINE_CONFIG.STROKE_COLOR}
                strokeOpacity={POLYLINE_CONFIG.STROKE_OPACITY}
                strokeStyle={POLYLINE_CONFIG.STROKE_STYLE}
            />
            {isVisible && <VehicleMarker vehicleInfo={vehicleOnDestination} />}
        </Map>
    )
})

MapSection.displayName = 'MapSection'

export default MapSection
