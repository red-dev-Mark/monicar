'use client'

import { memo } from 'react'

import Map from '@/components/domain/map/Map'
import { LiveMarker } from '@/components/domain/vehicle/LiveMarker'
import { useMapStatus } from '@/hooks/useMapStatus'
import { MapRefType } from '@/types/map'
import { Route } from '@/types/route'

interface MapSectionProps {
    mapRef: MapRefType
    currentLocations: Route[]
}

const MapSection = memo(({ mapRef, currentLocations }: MapSectionProps) => {
    const { mapState } = useMapStatus(mapRef.current)

    return (
        <Map ref={mapRef} level={mapState.level} center={mapState.center}>
            {currentLocations &&
                currentLocations.map((location) => <LiveMarker route={location} key={location.timestamp} />)}
        </Map>
    )
})

MapSection.displayName = 'MapSection'

export default MapSection
