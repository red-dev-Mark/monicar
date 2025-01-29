'use client'

import { CustomOverlayMap } from 'react-kakao-maps-sdk'

import CustomMarker from '@/app/(main)/location/components/CustomMarker'
import VehicleMarker from '@/app/(main)/location/components/VehicleMarker'
import Map from '@/components/domain/map/Map'
import ClusteringData from '@/mock/clustering.json'
import { MapState } from '@/types/map'
import { VehicleInfoModel } from '@/types/vehicle'

interface MapSectionProps {
    // mapRef: React.RefObject<kakao.maps.Map>
    mapState: MapState
    vehicleInfo: VehicleInfoModel
    isVehicleMarkerVisible: boolean
    onVehicleClick: () => void
    onMapLoad?: () => void
}

const MapSection = ({
    // mapRef,
    mapState,
    vehicleInfo,
    isVehicleMarkerVisible,
    onVehicleClick,
    onMapLoad,
}: MapSectionProps) => {
    return (
        <Map center={mapState.center} zoom={mapState.level} onLoad={onMapLoad}>
            {ClusteringData.result.map((loc, index) => {
                return (
                    <CustomOverlayMap key={index} position={loc.coordinate}>
                        {/* <MapMarker position={loc.coordinate} /> */}
                        <CustomMarker count={loc.count} onClick={() => console.log('click!')} />
                    </CustomOverlayMap>
                )
            })}
            {isVehicleMarkerVisible && <VehicleMarker vehicleInfo={vehicleInfo} onVehicleClick={onVehicleClick} />}
        </Map>
    )
}

export default MapSection
