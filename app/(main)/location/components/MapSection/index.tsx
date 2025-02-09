'use client'

import { useEffect, useRef, useState } from 'react'
import { CustomOverlayMap } from 'react-kakao-maps-sdk'

import ClusterMarker from '@/app/(main)/location/components/ClusterMarker'
import VehicleDetailCard from '@/app/(main)/location/components/VehicleDetailCard'
import VehicleMarker from '@/app/(main)/location/components/VehicleMarker'
import Map from '@/components/domain/map/Map'
import { useMapStatus } from '@/hooks/useMapStatus'
import { clusterService } from '@/lib/apis'
import { TransformedClusterInfo } from '@/types/cluster'
import { MapState } from '@/types/map'
import { VehicleDetail, VehicleLocation } from '@/types/vehicle'

interface MapSectionProps {
    mapState?: MapState
    vehicleInfo: VehicleLocation
    vehicleDetail: VehicleDetail
    isSearchedVehicleVisible: boolean
    isDetailCardVisible: boolean
    onVehicleClose: () => void
    onDetailCardOpen: () => void
    onDetailCardClose: () => void
}

const MapSection = ({
    mapState,
    vehicleInfo,
    vehicleDetail,
    isSearchedVehicleVisible,
    isDetailCardVisible,
    onVehicleClose,
    onDetailCardOpen,
    onDetailCardClose,
}: MapSectionProps) => {
    const [clusterInfo, setClusterInfo] = useState<TransformedClusterInfo[]>([])
    const [clusterDetail, setClusterDetail] = useState<VehicleLocation[]>([])
    const [isMapLoaded, setIsMapLoaded] = useState(false)

    const mapRef = useRef<kakao.maps.Map>(null)

    const { currentMapState, updateMapStatus } = useMapStatus(mapRef.current)

    useEffect(() => {
        if (!isMapLoaded) return

        updateMapStatus()
    }, [isMapLoaded])

    console.log(currentMapState)
    useEffect(() => {
        if (!isMapLoaded || !currentMapState) return

        const getClusterInfo = async () => {
            const clusterInfo = (await clusterService.getClusterInfo(currentMapState)) || []
            setClusterInfo(clusterInfo)
        }

        const getClusterDetails = async () => {
            const clusterDetail = await clusterService.getVehicleDetail(currentMapState)
            setClusterDetail(Array.isArray(clusterDetail) ? clusterDetail : [])
        }

        if (currentMapState.level > 4) {
            getClusterInfo()
        } else {
            getClusterDetails()
        }
    }, [isMapLoaded, currentMapState])

    const clearVehicleAndCard = () => {
        onVehicleClose()
        onDetailCardClose()
    }

    // TODO: 매직넘버 4 처리
    const isClusterVisible = currentMapState.level > 4
    const isClusterDetailVisible = currentMapState.level <= 4

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
                                // onClick={() => currentMapState.level - 1}
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
