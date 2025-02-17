'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useRef, useState } from 'react'

import MapSection from '@/app/(main)/route/components/MapSection'
import RouteSearchSection from '@/app/(main)/route/components/RouteSearchSection'
// import RouteTimelineSection from '@/app/(main)/route/components/RouteTimelineSection'
import SquareButton from '@/components/common/Button/SquareButton'
import { useMapStatus } from '@/hooks/useMapStatus'
import { useQueryParams } from '@/hooks/useQueryParams'
import { LatLng } from '@/types/map'

import * as styles from './styles.css'

const RoutePage = () => {
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
            <Suspense fallback={<div>서스펜스 불러오는 중!</div>}>
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
            </Suspense>
        </div>
    )
}

export default RoutePage
