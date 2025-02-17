'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { memo, useEffect } from 'react'
import { CustomOverlayMap, Polyline } from 'react-kakao-maps-sdk'

import Map from '@/components/domain/map/Map'
import VehicleMarker from '@/components/domain/vehicle/VehicleMarker'
import { LIVE_IMAGE, MAP_CONFIG, POLYLINE_CONFIG } from '@/constants/map'
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
    const { currentRoute, getLiveRouteData } = useLiveRoute()

    const searchParams = useSearchParams()

    const vehicleId = searchParams.get('vehicleId') || ''
    const vehicleNumber = searchParams.get('vehicleNumber') || ''
    const lat = Number(searchParams.get('endLat'))
    const lng = Number(searchParams.get('endLng'))

    useEffect(() => {
        if (!vehicleId || !vehicleNumber || !lat || !lng) {
            onRoutesChange([])
            return
        }

        if (isMapLoaded) {
            controlMapStatus({ lat, lng }, MAP_CONFIG.ROUTE.ZOOM_INCREMENT)
        }
    }, [searchParams, isMapLoaded])

    useEffect(() => {
        getLiveRouteData('2')
    }, [])

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
            {currentRoute && (
                <CustomOverlayMap
                    position={{
                        lat: currentRoute.lat,
                        lng: currentRoute.lng,
                    }}
                >
                    <div
                        style={{
                            width: `${LIVE_IMAGE.size.width}px`,
                            height: `${LIVE_IMAGE.size.height}px`,
                            transform: `translate(-50%, -50%) rotate(${currentRoute.ang}deg)`,
                        }}
                    >
                        <Image src={LIVE_IMAGE.src} alt='vehicle' width={24} height={24} priority />
                    </div>
                </CustomOverlayMap>
            )}
        </Map>
    )
})

MapSection.displayName = 'MapSection'

export default MapSection
