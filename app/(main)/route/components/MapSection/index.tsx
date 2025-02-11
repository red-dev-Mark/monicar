'use client'

import { useSearchParams } from 'next/navigation'
import { memo, useEffect, useState } from 'react'
import { Polyline } from 'react-kakao-maps-sdk'

import Map from '@/components/domain/map/Map'
import VehicleMarker from '@/components/domain/vehicle/VehicleMarker'
import { POLYLINE_CONFIG } from '@/constants/map'
import { MapState, LatLng, MapRefType } from '@/types/map'
import { VehicleLocation } from '@/types/vehicle'

interface MapSectionProps {
    mapRef: MapRefType
    mapState: MapState
    routes: LatLng[]
    onLoad?: () => void
}

const MapSection = memo(({ mapRef, mapState, routes, onLoad }: MapSectionProps) => {
    const [destination, setDestination] = useState<VehicleLocation>()

    const searchParams = useSearchParams()

    useEffect(() => {
        const vehicleId = searchParams.get('vehicleId') || ''
        const vehicleNumber = searchParams.get('vehicleNumber') || ''
        const lat = Number(searchParams.get('endLat'))
        const lng = Number(searchParams.get('endLng'))

        if (!lat || !lng) return

        const vehicleInfo = {
            vehicleId,
            vehicleNumber,
            coordinate: { lat, lng },
        }

        setDestination(vehicleInfo)
    }, [searchParams])

    return (
        <Map ref={mapRef} level={mapState.level} center={mapState.center} onLoad={onLoad}>
            <Polyline
                path={[routes]}
                strokeWeight={POLYLINE_CONFIG.STROKE_WEIGHT}
                strokeColor={POLYLINE_CONFIG.STROKE_COLOR}
                strokeOpacity={POLYLINE_CONFIG.STROKE_OPACITY}
                strokeStyle={POLYLINE_CONFIG.STROKE_STYLE}
            />
            {destination && <VehicleMarker vehicleInfo={destination} useHoverEffect={false} />}
        </Map>
    )
})

MapSection.displayName = 'MapSection'

export default MapSection
