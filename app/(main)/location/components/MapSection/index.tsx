'use client'

import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import VehicleDetailCard from '@/app/(main)/location/components/VehicleDetailCard'
import VehicleSearchSection from '@/app/(main)/location/components/VehicleSearchSection/indext'
import ViewportVehicleList from '@/app/(main)/location/components/ViewportVehicleList'
import ClusterOverlay from '@/components/domain/cluster/ClusterOverlay'
import VehicleOverlay from '@/components/domain/cluster/VehicleOverlay'
import Map from '@/components/domain/map/Map'
import { useCluster } from '@/hooks/useCluster'
import { useMapStatus } from '@/hooks/useMapStatus'
import { useQueryParams } from '@/hooks/useQueryParams'
import { isWithinZoomThreshold } from '@/lib/utils/map'

const MapSection = () => {
    const [isMapLoaded, setIsMapLoaded] = useState(false)
    const mapRef = useRef<kakao.maps.Map>(null)

    const { mapState, updateMapStatus, controlMapStatus } = useMapStatus(mapRef?.current)
    const { clearAllQueries } = useQueryParams()
    const { clusterInfo, clusterDetail } = useCluster(mapState, isMapLoaded)

    const searchParams = useSearchParams()

    const vehicleNumber = searchParams.get('vehicleNumber')

    const handleMapLoad = useCallback(() => {
        setIsMapLoaded(true)
    }, [])

    const handleMapClick = useCallback(() => {
        clearAllQueries()
    }, [clearAllQueries])

    const handleMapStatusChange = useCallback(() => {
        updateMapStatus()
    }, [updateMapStatus])

    useEffect(() => {
        if (!isMapLoaded) return
        updateMapStatus()
    }, [isMapLoaded])

    useEffect(() => {
        if (!vehicleNumber) return
        const timer = setTimeout(() => {
            updateMapStatus()
        }, 400)

        return () => clearTimeout(timer)
    }, [vehicleNumber])

    const shouldShowVehicleList = useMemo(() => isWithinZoomThreshold(mapState), [mapState])

    return (
        <>
            <VehicleSearchSection />
            <Map
                ref={mapRef}
                level={mapState?.level}
                center={mapState?.center}
                onLoad={handleMapLoad}
                onClick={handleMapClick}
                onMapStatusChanged={handleMapStatusChange}
            >
                <ClusterOverlay level={mapState.level} clusterInfo={clusterInfo} onClick={controlMapStatus} />
                <VehicleOverlay mapState={mapState} controlMapStatus={controlMapStatus} clusterDetail={clusterDetail} />

                {shouldShowVehicleList && <ViewportVehicleList clusterDetail={clusterDetail} />}
                <VehicleDetailCard mapRef={mapRef} />
            </Map>
        </>
    )
}

export default MapSection
