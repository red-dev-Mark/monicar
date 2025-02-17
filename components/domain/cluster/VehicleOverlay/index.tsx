import VehicleMarker from '@/components/domain/vehicle/VehicleMarker'
import { MAP_CONFIG } from '@/constants/map'
import { useQueryParams } from '@/hooks/useQueryParams'
import { LatLng, MapState } from '@/types/map'
import { VehicleLocation } from '@/types/vehicle'

interface VehicleOverlayProps {
    mapState: MapState
    controlMapStatus: (location: LatLng, level?: number) => void
    clusterDetail: VehicleLocation[]
}

const VehicleOverlay = ({ mapState, clusterDetail }: VehicleOverlayProps) => {
    const { addQuery } = useQueryParams()

    const handleVehicleClick = async (vehicleNumber: string) => {
        addQuery('vehicleNumber', vehicleNumber)
    }

    if (mapState.level > MAP_CONFIG.CLUSTER.VISIBLE_LEVEL) return

    return clusterDetail.map((cluster) => {
        return <VehicleMarker key={cluster.vehicleId} vehicleInfo={cluster} onClick={handleVehicleClick} />
    })
}

export default VehicleOverlay
