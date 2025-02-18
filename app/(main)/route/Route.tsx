'use client'

import { useRef, useState } from 'react'

import MapSection from '@/app/(main)/route/components/MapSection'
import RouteSearchSection from '@/app/(main)/route/components/RouteSearchSection'
import { useLiveRoute } from '@/hooks/useLiveRoute'
import { LatLng } from '@/types/map'

import * as styles from './styles.css'

const Route = () => {
    const [routes, setRoutes] = useState<LatLng[]>([])
    const [isMapLoaded, setIsMapLoaded] = useState(false)

    const { initialLiveRoute, currentLiveRoute, startLiveTracking, stopLiveTracking } = useLiveRoute()

    const mapRef = useRef<kakao.maps.Map>(null)

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
                routes={routes}
                initialLiveRoute={initialLiveRoute}
                currentLiveRoute={currentLiveRoute!}
                isMapLoaded={isMapLoaded}
                onRoutesChange={setRoutes}
                onLoad={() => setIsMapLoaded(true)}
            />
        </div>
    )
}

export default Route
