'use client'

import { useRef, useState } from 'react'
import { CustomOverlayMap } from 'react-kakao-maps-sdk'

import CustomMarker from '@/app/(main)/location/components/CustomMarker'
import VehicleMarker from '@/app/(main)/location/components/VehicleMarker'
import Map from '@/components/domain/map/Map'
import { getCurrentMapStatus } from '@/lib/utils/map'
import ClusteringData from '@/mock/clustering.json'
import { LatLng } from '@/types/location'
import { MapState } from '@/types/map'
import { VehicleInfoModel } from '@/types/vehicle'

interface MapSectionProps {
    mapState: MapState
    vehicleInfo: VehicleInfoModel
    isVehicleMarkerVisible: boolean
    onVehicleClick: () => void
    onClick: (location: LatLng, level: number) => void
}

const MapSection = ({ mapState, vehicleInfo, isVehicleMarkerVisible, onVehicleClick, onClick }: MapSectionProps) => {
    const [isMapLoaded, setIsMapLoaded] = useState(false)
    const mapRef = useRef<kakao.maps.Map>(null)

    const handleZoomChanged = () => {
        if (!isMapLoaded || !mapRef.current) return

        const map = mapRef.current
        const currentMapStatus = getCurrentMapStatus(map)

        console.log(currentMapStatus)
    }

    return (
        <Map
            ref={mapRef}
            center={mapState.center}
            zoom={mapState.level}
            onLoad={() => setIsMapLoaded(true)}
            onMapStatusChanged={handleZoomChanged}
        >
            {ClusteringData.result.map((loc, index) => {
                return (
                    <CustomOverlayMap key={index} position={loc.coordinate}>
                        <CustomMarker count={loc.count} onClick={() => onClick(loc.coordinate, mapState.level - 1)} />
                    </CustomOverlayMap>
                )
            })}
            {isVehicleMarkerVisible && <VehicleMarker vehicleInfo={vehicleInfo} onVehicleClick={onVehicleClick} />}
        </Map>
    )
}

export default MapSection
