'use client'

import VehicleMarker from '@/app/(main)/location/components/VehicleMarker'
import Map from '@/components/domain/map/Map'
import { MapState } from '@/types/map'
import { VehicleInfoModel } from '@/types/vehicle'

interface MapSectionProps {
    // mapRef: React.RefObject<kakao.maps.Map>
    mapState: MapState
    vehicleInfo: VehicleInfoModel
    isVehicleMarkerVisible: boolean
    onVehicleClick: () => void
    onMapLoad: () => void
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
            {isVehicleMarkerVisible && <VehicleMarker vehicleInfo={vehicleInfo} onVehicleClick={onVehicleClick} />}
        </Map>
    )
}

export default MapSection
