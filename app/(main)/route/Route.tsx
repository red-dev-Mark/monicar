'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import MapSection from '@/app/(main)/route/components/MapSection'
import RouteSearchSection from '@/app/(main)/route/components/RouteSearchSection'
import SquareButton from '@/components/common/Button/SquareButton'
import { useMapStatus } from '@/hooks/useMapStatus'
import { useQueryParams } from '@/hooks/useQueryParams'
import { LatLng } from '@/types/map'

import * as styles from './styles.css'

const Route = () => {
    const [routes, setRoutes] = useState<LatLng[]>([])
    const [isMapLoaded, setIsMapLoaded] = useState(false)

    const mapRef = useRef<kakao.maps.Map>(null)

    const { mapState, updateMapStatus } = useMapStatus(mapRef?.current)

    const searchParams = useSearchParams()
    const { removeQuery } = useQueryParams()

    const live = searchParams.get('live')

    useEffect(() => {
        if (!isMapLoaded) return

        updateMapStatus()
    }, [isMapLoaded])

    return (
        <div className={styles.container}>
            {live ? (
                <div className={styles.buttonWrapper}>
                    <SquareButton onClick={() => removeQuery('live')}>경로 조회</SquareButton>
                </div>
            ) : (
                <RouteSearchSection mapRef={mapRef} onRoutesChange={setRoutes} />
            )}

            {/* <RouteTimelineSection /> */}
            <MapSection
                mapRef={mapRef}
                mapState={mapState}
                routes={routes}
                isMapLoaded={isMapLoaded}
                onRoutesChange={setRoutes}
                onLoad={() => setIsMapLoaded(true)}
            />
        </div>
    )
}

export default Route
