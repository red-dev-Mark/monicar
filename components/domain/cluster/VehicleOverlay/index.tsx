import VehicleMarker from '@/components/domain/vehicle/VehicleMarker'
import { MAP_CONFIG } from '@/constants/map'
import { MapState } from '@/types/map'
import { VehicleLocation } from '@/types/vehicle'

interface VehicleOverlayProps {
    mapState: MapState
    clusterDetail: VehicleLocation[]
    selectedVehicleId?: string
    onVehicleClick?: (vehicleId: string, vehicleNumber: string) => void
}

const VehicleOverlay = ({ mapState, clusterDetail, selectedVehicleId, onVehicleClick }: VehicleOverlayProps) => {
    if (mapState.level > MAP_CONFIG.CLUSTER.VISIBLE_LEVEL) return null

    return clusterDetail.map((cluster) => {
        return (
            <VehicleMarker
                key={cluster.vehicleId}
                vehicleInfo={cluster}
                useHoverEffect={selectedVehicleId === cluster.vehicleId ? false : true}
                onClick={onVehicleClick}
            />
        )
    })
}

export default VehicleOverlay
