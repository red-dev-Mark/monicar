'use client'

import { memo, useEffect, useState } from 'react'

import VehicleDetailCard from '@/app/(main)/location/components/VehicleDetailCard'
import ViewportVehicleList from '@/app/(main)/location/components/ViewportVehicleList'
import ClusterOverlay from '@/components/domain/cluster/ClusterOverlay'
import VehicleOverlay from '@/components/domain/cluster/VehicleOverlay'
import Map from '@/components/domain/map/Map'
import VehicleMarker from '@/components/domain/vehicle/VehicleMarker'
import { MAP_CONFIG } from '@/constants/map'
import { useCluster } from '@/hooks/useCluster'
import { useMapStatus } from '@/hooks/useMapStatus'
import { useVehicleDisclosure } from '@/hooks/useVehicleDisclosure'
import { MapRefType } from '@/types/map'
import { VehicleDetail, VehicleLocation } from '@/types/vehicle'

interface MapSectionProps {
    mapRef: MapRefType
    vehicleInfo: VehicleLocation
    searchedDetail: VehicleDetail
}

const MapSection = memo(({ mapRef, vehicleInfo, searchedDetail }: MapSectionProps) => {
    const [selectedVehicleDetail, setSelectedVehicleDetail] = useState<VehicleDetail | undefined>()

    const [isMapLoaded, setIsMapLoaded] = useState(false)

    const { mapState, updateMapStatus, controlMapStatus } = useMapStatus(mapRef?.current)
    const { clusterInfo, clusterDetail } = useCluster(mapState, isMapLoaded)
    const { isSearchedVehicleVisible, showSelectedVehicle, selectVehicle } = useVehicleDisclosure()

    useEffect(() => {
        if (!isMapLoaded) return

        updateMapStatus()
    }, [isMapLoaded])

    const handleVehicleClick = async (vehicleId: string, vehicleNumber: string) => {
        const selectedVehicleDetail = await selectVehicle(vehicleId, vehicleNumber)

        setSelectedVehicleDetail(selectedVehicleDetail)
        showSelectedVehicle()

        // TODO: 지금 API 응답 위치가 다름
        // controlMapStatus({
        //     lat: normalizeCoordinate(lat),
        //     lng: normalizeCoordinate(lng),
        // })

        // TODO: 지금 API 응답 위치가 다름
        const filteredCoord = clusterDetail.filter((cluster) => {
            return cluster.vehicleId === vehicleId
        })
        // TODO: 지금 API 응답 위치가 다름
        controlMapStatus({
            lat: filteredCoord[0].coordinate.lat,
            lng: filteredCoord[0].coordinate.lng,
        })
    }

    const isViewportVehicleListVisible = mapState.level <= MAP_CONFIG.CLUSTER.VISIBLE_LEVEL

    return (
        <Map
            ref={mapRef}
            level={mapState?.level}
            center={mapState?.center}
            onLoad={() => setIsMapLoaded(true)}
            onMapStatusChanged={updateMapStatus}
        >
            {/* 차량 번호로 검색 */}
            {isSearchedVehicleVisible && (
                <>
                    <VehicleMarker vehicleInfo={vehicleInfo} useHoverEffect={false} />
                    <VehicleDetailCard vehicleDetail={searchedDetail} />
                </>
            )}

            {/* 클러스터링 관련 */}
            <ClusterOverlay mapState={mapState} clusterInfo={clusterInfo} onClusterClick={controlMapStatus} />
            <VehicleOverlay
                mapState={mapState}
                clusterDetail={clusterDetail}
                selectedVehicleId={''}
                onVehicleClick={handleVehicleClick}
            />

            {isViewportVehicleListVisible && (
                <ViewportVehicleList
                    clusterDetail={clusterDetail}
                    selectedVehicleDetail={selectedVehicleDetail}
                    onItemClick={handleVehicleClick}
                />
            )}
        </Map>
    )
})

MapSection.displayName = 'MapSection'

export default MapSection
