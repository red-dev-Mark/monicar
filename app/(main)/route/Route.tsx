'use client'

// import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import MapSection from '@/app/(main)/route/components/MapSection'
import RouteSearchSection from '@/app/(main)/route/components/RouteSearchSection'
// import { useLiveRoute } from '@/hooks/useLiveRoute'
import { useLiveRoute } from '@/hooks/useLiveRoute'
import { useMapStatus } from '@/hooks/useMapStatus'
import { LatLng } from '@/types/map'

import * as styles from './styles.css'

const Route = () => {
    const [routes, setRoutes] = useState<LatLng[]>([])
    const [isMapLoaded, setIsMapLoaded] = useState(false)

    const { currentRoute, startLiveTracking, stopLiveTracking } = useLiveRoute()

    // const searchParams = useSearchParams()
    // const vehicleId = searchParams.get('vehicleId')
    // const live = searchParams.get('live') === 'true'

    const mapRef = useRef<kakao.maps.Map>(null)
    const { mapState, updateMapStatus } = useMapStatus(mapRef?.current)

    useEffect(() => {
        if (!isMapLoaded) return
        updateMapStatus()
    }, [isMapLoaded])

    // useEffect(() => {
    // if (live && vehicleId) {
    // getLiveRouteData(vehicleId)
    // setRoutes([])
    // }
    // }, [live, vehicleId])

    return (
        <div className={styles.container}>
            <RouteSearchSection
                mapRef={mapRef}
                onRoutesChange={setRoutes}
                startLiveTracking={startLiveTracking}
                stopLiveTracking={stopLiveTracking}
            />
            <MapSection
                mapRef={mapRef}
                mapState={mapState}
                routes={routes}
                // liveRoutes={live ? currentRoute : undefined}
                currentRoute={currentRoute!}
                isMapLoaded={isMapLoaded}
                onRoutesChange={setRoutes}
                onLoad={() => setIsMapLoaded(true)}
            />
        </div>
    )
}

export default Route
