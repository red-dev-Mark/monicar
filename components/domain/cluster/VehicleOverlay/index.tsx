import VehicleMarker from '@/components/domain/vehicle/VehicleMarker'
import { MAP_CONFIG } from '@/constants/map'
import { useQueryParams } from '@/hooks/useQueryParams'
import { vehicleService } from '@/lib/apis'
import { normalizeCoordinate } from '@/lib/utils/normalize'
import { LatLng, MapState } from '@/types/map'
import { VehicleLocation } from '@/types/vehicle'

interface VehicleOverlayProps {
    mapState: MapState
    controlMapStatus: (location: LatLng, level?: number) => void
    clusterDetail: VehicleLocation[]
}

const VehicleOverlay = ({ mapState, controlMapStatus, clusterDetail }: VehicleOverlayProps) => {
    const { addQueries } = useQueryParams()

    const handleVehicleClick = async (vehicleId: string) => {
        const result = await vehicleService.getVehicleDetail(vehicleId)
        if (!result.isSuccess || !result.data) throw new Error(result.error || '')

        const vehicleDetail = result.data
        const {
            recentVehicleInfo: { vehicleNumber },
            recentCycleInfo: { lat, lng },
        } = vehicleDetail

        const coordinate = {
            lat: normalizeCoordinate(lat),
            lng: normalizeCoordinate(lng),
        }

        controlMapStatus(coordinate)
        addQueries({
            vehicleId,
            vehicleNumber,
            lat: coordinate.lat,
            lng: coordinate.lng,
        })
    }

    if (mapState.level > MAP_CONFIG.CLUSTER.VISIBLE_LEVEL) return

    return clusterDetail.map((cluster) => {
        return <VehicleMarker key={cluster.vehicleId} vehicleInfo={cluster} onClick={handleVehicleClick} />
    })
}

export default VehicleOverlay
