'use client'

import { memo, useEffect, useRef, useState } from 'react'

import VehicleDetailCard from '@/app/(main)/location/components/VehicleDetailCard'
import VehicleSearchSection from '@/app/(main)/location/components/VehicleSearchSection/indext'
import ViewportVehicleList from '@/app/(main)/location/components/ViewportVehicleList'
import ClusterOverlay from '@/components/domain/cluster/ClusterOverlay'
import VehicleOverlay from '@/components/domain/cluster/VehicleOverlay'
import Map from '@/components/domain/map/Map'
import { MAP_CONFIG } from '@/constants/map'
import { useCluster } from '@/hooks/useCluster'
import { useMapStatus } from '@/hooks/useMapStatus'
import { useQueryParams } from '@/hooks/useQueryParams'
import { vehicleService } from '@/lib/apis'
import { normalizeCoordinate } from '@/lib/utils/normalize'

const MapSection = memo(() => {
    const [isMapLoaded, setIsMapLoaded] = useState(false)
    const mapRef = useRef<kakao.maps.Map>(null)

    const { mapState, updateMapStatus, controlMapStatus } = useMapStatus(mapRef?.current)
    const { addQueries, clearAllQueries } = useQueryParams()
    const { clusterInfo, clusterDetail } = useCluster(mapState, isMapLoaded)

    useEffect(() => {
        if (!isMapLoaded) return

        updateMapStatus()
    }, [isMapLoaded])

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

    const isViewportVehicleListVisible = mapState.level <= MAP_CONFIG.CLUSTER.VISIBLE_LEVEL

    return (
        <>
            <VehicleSearchSection mapRef={mapRef} isMapLoaded={isMapLoaded} />
            <Map
                ref={mapRef}
                level={mapState?.level}
                center={mapState?.center}
                onLoad={() => setIsMapLoaded(true)}
                onClick={() => clearAllQueries()}
                onMapStatusChanged={updateMapStatus}
            >
                <ClusterOverlay level={mapState.level} clusterInfo={clusterInfo} onClick={controlMapStatus} />
                <VehicleOverlay mapState={mapState} controlMapStatus={controlMapStatus} clusterDetail={clusterDetail} />

                {isViewportVehicleListVisible && (
                    <>
                        <VehicleDetailCard />
                        <ViewportVehicleList clusterDetail={clusterDetail} onVehicleClick={handleVehicleClick} />
                    </>
                )}
            </Map>
        </>
    )
})

MapSection.displayName = 'MapSection'

export default MapSection
