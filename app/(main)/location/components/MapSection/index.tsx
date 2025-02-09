'use client'

import { useEffect, useState } from 'react'
import { CustomOverlayMap } from 'react-kakao-maps-sdk'

import ClusterMarker from '@/app/(main)/location/components/ClusterMarker'
import VehicleDetailCard from '@/app/(main)/location/components/VehicleDetailCard'
import VehicleMarker from '@/app/(main)/location/components/VehicleMarker'
import Map from '@/components/domain/map/Map'
import { useCluster } from '@/hooks/useCluster'
import { useMapStatus } from '@/hooks/useMapStatus'
import { VehicleDetail, VehicleLocation } from '@/types/vehicle'

interface MapSectionProps {
    mapRef?: React.RefObject<kakao.maps.Map>
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

    // TODO: 매직넘버 4 처리
    const isClusterVisible = mapState.level > 4
    const isClusterDetailVisible = mapState.level <= 4

    return (
        <Map
            ref={mapRef}
            center={mapState?.center}
            zoom={mapState?.level}
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

            {/* 클러스터링 */}
            {isClusterVisible &&
                clusterInfo.map((cluster, index) => {
                    return (
                        <CustomOverlayMap
                            key={index}
                            position={{ lat: cluster.coordinate.lat, lng: cluster.coordinate.lng }}
                        >
                            <ClusterMarker
                                count={cluster.count}
                                onClick={() =>
                                    controlMapStatus(mapState.level - 2, {
                                        lat: cluster.coordinate.lat,
                                        lng: cluster.coordinate.lng,
                                    })
                                }
                            />
                        </CustomOverlayMap>
                    )
                })}
            {isClusterDetailVisible &&
                clusterDetail.map((cluster) => {
                    return <VehicleMarker key={cluster.vehicleId} vehicleInfo={cluster} />
                })}
        </Map>
    )
}

export default MapSection
