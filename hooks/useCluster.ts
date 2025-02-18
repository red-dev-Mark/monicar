import { useEffect, useState } from 'react'

import { clusterService } from '@/lib/apis'
import { isWithinZoomThreshold } from '@/lib/utils/map'
import { TransformedClusterInfo } from '@/types/cluster'
import { MapState } from '@/types/map'
import { VehicleLocation } from '@/types/vehicle'

export const useCluster = (mapState: MapState, isMapLoaded: boolean) => {
    const [clusterInfo, setClusterInfo] = useState<TransformedClusterInfo[]>([])
    const [clusterDetail, setClusterDetail] = useState<VehicleLocation[]>([])

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

        if (!isWithinZoomThreshold(mapState)) {
            getClusterInfo()
        } else {
            getClusterDetails()
        }
    }, [isMapLoaded, mapState])

    return {
        clusterInfo,
        clusterDetail,
    }
}
