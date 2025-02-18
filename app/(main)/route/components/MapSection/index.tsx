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
import { Route } from '@/types/route'

interface MapSectionProps {
    mapRef: MapRefType
    routes: LatLng[]
    initialLiveRoute: Route
    currentLiveRoute: Route
    isMapLoaded: boolean
    onRoutesChange: (paths: LatLng[]) => void
    onLoad?: () => void
}

const MapSection = memo(
    ({ mapRef, routes, initialLiveRoute, currentLiveRoute, isMapLoaded, onRoutesChange, onLoad }: MapSectionProps) => {
        const { mapState, controlMapStatus } = useMapStatus(mapRef.current)

        const searchParams = useSearchParams()

        const vehicleNumber = searchParams.get('vehicleNumber') || ''
        const lat = Number(searchParams.get('endLat'))
        const lng = Number(searchParams.get('endLng'))
        const live = searchParams.get('live') === 'true'
        const tracking = searchParams.get('tracking') === 'true'

        useEffect(() => {
            if (!isMapLoaded) return

            if (tracking && currentLiveRoute?.lat) {
                controlMapStatus(
                    { lat: currentLiveRoute.lat, lng: currentLiveRoute.lng },
                    MAP_CONFIG.ROUTE.TRACKING_ZOOM_INCREMENT,
                )
            }
        }, [tracking, currentLiveRoute, isMapLoaded])

        useEffect(() => {
            if (!isMapLoaded) return

            if (live && initialLiveRoute) {
                controlMapStatus(
                    { lat: initialLiveRoute.lat, lng: initialLiveRoute.lng },
                    MAP_CONFIG.ROUTE.LIVE_ZOOM_INCREMENT,
                )
                return
            }

            if (lat && lng) {
                controlMapStatus({ lat, lng }, MAP_CONFIG.ROUTE.ZOOM_INCREMENT)
                return
            }

            onRoutesChange([])
        }, [live, initialLiveRoute, lat, lng, isMapLoaded])

        const vehicleOnDestination = {
            vehicleId: '',
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
                {live && currentLiveRoute && <LiveMarker route={currentLiveRoute} />}
            </Map>
        )
    },
)

MapSection.displayName = 'MapSection'

export default MapSection
