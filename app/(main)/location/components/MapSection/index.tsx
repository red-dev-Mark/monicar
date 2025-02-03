'use client'

import { useEffect, useRef, useState } from 'react'
import { CustomOverlayMap } from 'react-kakao-maps-sdk'

import CustomMarker from '@/app/(main)/location/components/CustomMarker'
import VehicleMarker from '@/app/(main)/location/components/VehicleMarker'
import Map from '@/components/domain/map/Map'
import { useMapStatus } from '@/hooks/useCurrentMapStatus'
import { clusterService } from '@/lib/apis/cluster'
// import ClusteringData from '@/mock/clustering.json'
import { LatLng } from '@/types/location'
import { ClusterPoint, MapState } from '@/types/map'
import { VehicleInfoModel } from '@/types/vehicle'

interface MapSectionProps {
    mapState: MapState
    vehicleInfo: VehicleInfoModel
    isVehicleMarkerVisible: boolean
    onVehicleClick: () => void
    onClick: (location: LatLng, level: number) => void
}

const MapSection = ({ mapState, vehicleInfo, isVehicleMarkerVisible, onVehicleClick, onClick }: MapSectionProps) => {
    const [clusterInfo, setClusterInfo] = useState<ClusterPoint[]>([])
    const [isMapLoaded, setIsMapLoaded] = useState(false)
    const mapRef = useRef<kakao.maps.Map>(null)

    const { currentMapState, updateMapStatus } = useMapStatus(mapRef.current)

    useEffect(() => {
        if (!isMapLoaded) return

        updateMapStatus()
    }, [isMapLoaded])

    useEffect(() => {
        if (!isMapLoaded || !currentMapState) return
        const getClusterInfo = async () => {
            const clusterInfo: ClusterPoint[] = await clusterService.getClusterInfo(currentMapState)

            // console.log(clusterInfo)

            if (!clusterInfo) return

            setClusterInfo(clusterInfo)
            const clusterDetailInfo = await clusterService.getClusterDetailInfo(currentMapState)

            console.log(clusterDetailInfo)
        }

        getClusterInfo()
    }, [isMapLoaded, currentMapState])

    return (
        <Map
            ref={mapRef}
            center={mapState.center}
            zoom={mapState.level}
            onLoad={() => setIsMapLoaded(true)}
            onMapStatusChanged={updateMapStatus}
        >
            {/* {ClusteringData.result.map((loc, index) => {
                return (
                    <CustomOverlayMap key={index} position={loc.coordinate}>
                        <CustomMarker count={loc.count} onClick={() => onClick(loc.coordinate, mapState.level - 1)} />
                    </CustomOverlayMap>
                )
            })} */}
            {clusterInfo.map((point) => {
                return (
                    <CustomOverlayMap
                        key={`${point.coordinate.lat}-${point.coordinate.lat}`}
                        position={point.coordinate}
                    >
                        <CustomMarker
                            count={point.count}
                            onClick={() => onClick(point.coordinate, mapState.level - 1)}
                        />
                    </CustomOverlayMap>
                )
            })}
            {isVehicleMarkerVisible && <VehicleMarker vehicleInfo={vehicleInfo} onVehicleClick={onVehicleClick} />}
        </Map>
    )
}

export default MapSection
