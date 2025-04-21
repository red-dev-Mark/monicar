'use client'

import { useSearchParams } from 'next/navigation'
import { memo, useEffect } from 'react'
import { Polyline } from 'react-kakao-maps-sdk'

import Map from '@/components/domain/map/Map'
import { LiveMarker } from '@/components/domain/vehicle/LiveMarker'
import VehicleMarker from '@/components/domain/vehicle/VehicleMarker'
import { MAP_CONFIG, POLYLINE_CONFIG } from '@/constants/map'
import { useMapStatus } from '@/hooks/useMapStatus'
import { LatLng, MapRefType } from '@/types/map'
import { LiveRoute } from '@/types/route'

interface MapSectionProps {
    mapRef: MapRefType
    routes: LatLng[]
    liveLocation: LiveRoute
    isMapLoaded: boolean
    onRoutesChange: (paths: LatLng[]) => void
    onLoad?: () => void
}

const MapSection = memo(({ mapRef, routes, liveLocation, isMapLoaded, onLoad }: MapSectionProps) => {
    const { mapState, controlMapStatus } = useMapStatus(mapRef.current)

    const searchParams = useSearchParams()

    const vehicleNumber = searchParams.get('vehicleNumber') || ''
    const live = searchParams.get('live') === 'true'
    const tracking = searchParams.get('tracking') === 'true'

    useEffect(() => {
        if (!isMapLoaded) return
        if (tracking && liveLocation?.lat) {
            controlMapStatus({ lat: liveLocation.lat, lng: liveLocation.lng }, MAP_CONFIG.ROUTE.TRACKING_ZOOM_INCREMENT)
        }
    }, [tracking, liveLocation, isMapLoaded, controlMapStatus])

    const isVisible = routes.length > 0 && !live

    const vehicleOnDestination = {
        vehicleNumber,
        coordinate: {
            lat: isVisible ? routes[routes.length - 1].lat : 0,
            lng: isVisible ? routes[routes.length - 1].lng : 0,
        },
    }

    return (
        <Map ref={mapRef} level={mapState.level} center={mapState.center} onLoad={onLoad}>
            {isVisible && (
                <>
                    <Polyline
                        path={[routes]}
                        strokeWeight={POLYLINE_CONFIG.STROKE_WEIGHT}
                        strokeColor={POLYLINE_CONFIG.STROKE_COLOR}
                        strokeOpacity={POLYLINE_CONFIG.STROKE_OPACITY}
                        strokeStyle={POLYLINE_CONFIG.STROKE_STYLE}
                    />
                    <VehicleMarker vehicleInfo={vehicleOnDestination} />
                </>
            )}
            {live && liveLocation && <LiveMarker route={liveLocation} />}
        </Map>
    )
})

MapSection.displayName = 'MapSection'

export default MapSection
