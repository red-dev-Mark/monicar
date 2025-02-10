'use client'

import { useEffect, useRef, useState } from 'react'

import MapSection from '@/app/(main)/route/components/MapSection'
import RouteSearchPanel from '@/app/(main)/route/components/RouteSearchPanel'
import VehicleRouteTimeline from '@/app/(main)/route/components/VehicleRouteTimeline'
import { useMapStatus } from '@/hooks/useMapStatus'
import { LatLng } from '@/types/map'

import * as styles from './styles.css'

const RoutePage = () => {
    const [routes, setRoutes] = useState<LatLng[]>([])
    const [isMapLoaded, setIsMapLoaded] = useState(false)

    const mapRef = useRef<kakao.maps.Map>(null)

    const { updateMapStatus } = useMapStatus(mapRef?.current)

    useEffect(() => {
        if (!isMapLoaded) return

        updateMapStatus()
    }, [isMapLoaded])

    const { mapState } = useMapStatus(mapRef.current)

    return (
        <div className={styles.container}>
            <RouteSearchPanel mapRef={mapRef} onRouteChange={setRoutes} />
            <VehicleRouteTimeline />
            <MapSection mapRef={mapRef} mapState={mapState} routes={routes} onLoad={() => setIsMapLoaded(true)} />
        </div>
    )
}

export default RoutePage
