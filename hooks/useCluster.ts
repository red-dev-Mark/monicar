import { useEffect, useState } from 'react'

import { MAP_CONFIG } from '@/constants/map'
import { useVehicleDisclosure } from '@/hooks/useVehicleDisclosure'
import { clusterService } from '@/lib/apis'
import { useVehicleVisibleStore } from '@/stores/useVehicleVisibleStore'
import { TransformedClusterInfo } from '@/types/cluster'
import { MapState } from '@/types/map'
import { VehicleLocation } from '@/types/vehicle'

export const useCluster = (mapState: MapState, isMapLoaded: boolean) => {
    const [clusterInfo, setClusterInfo] = useState<TransformedClusterInfo[]>([])
    const [clusterDetail, setClusterDetail] = useState<VehicleLocation[]>([])

    const { hideSearchedVehicle, hideSelectedVehicle } = useVehicleDisclosure()
    const setInputValue = useVehicleVisibleStore((state) => state.setInputValue)

    useEffect(() => {
        if (!mapState || !isMapLoaded) return

        const getClusterInfo = async () => {
            const clusterInfo = (await clusterService.getClusterInfo(mapState)) || []
            setClusterInfo(clusterInfo)
        }

        const getClusterDetails = async () => {
            const clusterDetail = await clusterService.getVehicleDetail(mapState)
            setClusterDetail(Array.isArray(clusterDetail) ? clusterDetail : [])
        }

        if (mapState.level > MAP_CONFIG.CLUSTER.VISIBLE_LEVEL) {
            getClusterInfo()
            hideSearchedVehicle()
            hideSelectedVehicle()
            setInputValue('')
        } else {
            getClusterDetails()
        }
    }, [isMapLoaded, mapState])

    return {
        clusterInfo,
        clusterDetail,
    }
}
