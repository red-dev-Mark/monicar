'use client'

import { useEffect, useState } from 'react'

import ClusterOverlay from '@/components/domain/cluster/ClusterOverlay'
import VehicleOverlay from '@/components/domain/cluster/VehicleOverlay'
import Map from '@/components/domain/map/Map'
import VehicleDetailCard from '@/components/domain/vehicle/VehicleDetailCard'
import VehicleMarker from '@/components/domain/vehicle/VehicleMarker'
import { useCluster } from '@/hooks/useCluster'
import { useMapStatus } from '@/hooks/useMapStatus'
import { MapRefType } from '@/types/map'
import { VehicleDetail, VehicleLocation } from '@/types/vehicle'

interface MapSectionProps {
    mapRef?: MapRefType
    vehicleInfo: VehicleLocation
    vehicleDetail: VehicleDetail
    isSearchedVehicleVisible: boolean
    isDetailCardVisible: boolean
    onVehicleClose: () => void
    onDetailCardOpen: () => void
    onDetailCardClose: () => void
}

const MapSection = ({
    mapRef,
    vehicleInfo,
    vehicleDetail,
    isSearchedVehicleVisible,
    isDetailCardVisible,
    onVehicleClose,
    onDetailCardOpen,
    onDetailCardClose,
}: MapSectionProps) => {
    const [isMapLoaded, setIsMapLoaded] = useState(false)

    const { mapState, updateMapStatus, controlMapStatus } = useMapStatus(mapRef?.current)
    const { clusterInfo, clusterDetail } = useCluster(mapState, isMapLoaded)

    useEffect(() => {
        if (!isMapLoaded) return

        updateMapStatus()
    }, [isMapLoaded])

    const clearVehicleAndCard = () => {
        onVehicleClose()
        onDetailCardClose()
    }

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
                <VehicleMarker
                    vehicleInfo={vehicleInfo}
                    useHoverEffect={false}
                    onClick={onDetailCardOpen}
                    onClose={clearVehicleAndCard}
                />
            )}
            {isDetailCardVisible && <VehicleDetailCard vehicleDetails={vehicleDetail} onClose={onDetailCardClose} />}

            {/* 클러스터링 관련 */}
            <ClusterOverlay mapState={mapState} clusterInfo={clusterInfo} onClusterClick={controlMapStatus} />
            <VehicleOverlay
                mapState={mapState}
                clusterDetail={clusterDetail}
                onVehicleClick={() => console.log('차량 클릭!')}
            />
        </Map>
    )
}

export default MapSection
