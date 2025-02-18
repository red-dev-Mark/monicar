'use client'

import { useSearchParams } from 'next/navigation'
import { memo, useEffect } from 'react'
import { Polyline } from 'react-kakao-maps-sdk'

import Map from '@/components/domain/map/Map'
import { LiveMarker } from '@/components/domain/vehicle/LiveMarker'
import VehicleMarker from '@/components/domain/vehicle/VehicleMarker'
import { MAP_CONFIG, POLYLINE_CONFIG } from '@/constants/map'
import { useLiveRoute } from '@/hooks/useLiveRoute'
import { useMapStatus } from '@/hooks/useMapStatus'
import { MapState, LatLng, MapRefType } from '@/types/map'

interface MapSectionProps {
    mapRef: MapRefType
    mapState: MapState
    routes: LatLng[]
    isMapLoaded: boolean
    onRoutesChange: (paths: LatLng[]) => void
    onLoad?: () => void
}

const MapSection = memo(({ mapRef, mapState, routes, isMapLoaded, onRoutesChange, onLoad }: MapSectionProps) => {
    const { controlMapStatus } = useMapStatus(mapRef.current)
    const { currentRoute, getLiveRouteData } = useLiveRoute('2')

    const searchParams = useSearchParams()

    const vehicleId = searchParams.get('vehicleId') || ''
    const vehicleNumber = searchParams.get('vehicleNumber') || ''
    const lat = Number(searchParams.get('endLat'))
    const lng = Number(searchParams.get('endLng'))
    const live = searchParams.get('live') === 'true'

    useEffect(() => {
        if (!vehicleId || !vehicleNumber || !lat || !lng) {
            onRoutesChange([])
            return
        }

        if (isMapLoaded) {
            controlMapStatus({ lat, lng }, MAP_CONFIG.ROUTE.ZOOM_INCREMENT)
        }

        if (live) {
            getLiveRouteData('2')
        }
    }, [searchParams, isMapLoaded])

    const vehicleOnDestination = {
        vehicleId,
        vehicleNumber,
        coordinate: { lat, lng },
    }

    const isVisible = routes.length > 0

    return (
        <Map ref={mapRef} level={mapState.level} center={mapState.center} onLoad={onLoad}>
            <Polyline
                path={[routes]}
                strokeWeight={POLYLINE_CONFIG.STROKE_WEIGHT}
                strokeColor={POLYLINE_CONFIG.STROKE_COLOR}
                strokeOpacity={POLYLINE_CONFIG.STROKE_OPACITY}
                strokeStyle={POLYLINE_CONFIG.STROKE_STYLE}
            />
            {isVisible && <VehicleMarker vehicleInfo={vehicleOnDestination} />}
            {live && currentRoute && <LiveMarker route={currentRoute} />}
        </Map>
    )
})

MapSection.displayName = 'MapSection'

export default MapSection
