'use client'

import { Suspense, useEffect, useRef, useState } from 'react'

import MapSection from '@/app/(main)/route/components/MapSection'
import RouteSearchSection from '@/app/(main)/route/components/RouteSearchSection'
import RouteTimelineSection from '@/app/(main)/route/components/RouteTimelineSection'
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
            <Suspense fallback={<div>서스펜스 불러오는 중!</div>}>
                <RouteSearchSection mapRef={mapRef} onRoutesChange={setRoutes} />
                <RouteTimelineSection />
                <MapSection mapRef={mapRef} mapState={mapState} routes={routes} onLoad={() => setIsMapLoaded(true)} />
            </Suspense>
        </div>
    )
}

export default RoutePage
