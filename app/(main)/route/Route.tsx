'use client'

import { Tooltip } from '@mantine/core'
import { useSearchParams } from 'next/navigation'
import { useRef, useState } from 'react'

import MapSection from '@/app/(main)/route/components/MapSection'
import RouteSearchSection from '@/app/(main)/route/components/RouteSearchSection'
import LiveMode from '@/components/common/LiveMode'
import { useLiveRoute } from '@/hooks/useLiveRoute'
import { useQueryParams } from '@/hooks/useQueryParams'
import { vars } from '@/styles/theme.css'
import { LatLng } from '@/types/map'

import * as styles from './styles.css'

const Route = () => {
    const [routes, setRoutes] = useState<LatLng[]>([])
    const [isMapLoaded, setIsMapLoaded] = useState(false)

    const { initialLiveRoute, currentLiveRoute, startLiveTracking, stopLiveTracking } = useLiveRoute()

    const mapRef = useRef<kakao.maps.Map>(null)

    const searchParams = useSearchParams()

    const { addQuery, removeQuery } = useQueryParams()

    const live = searchParams.get('live') === 'true'

    const handleTrackingToggle = (isClicked: boolean) => {
        if (isClicked) {
            addQuery('tracking', 'true')
        } else {
            removeQuery('tracking')
        }
    }

    // console.log('currentLiveRoute', currentLiveRoute)

    return (
        <div className={styles.container}>
            {live && (
                <Tooltip
                    label={'차량 위치 자동 추적'}
                    color={vars.colors.gray[800]}
                    arrowSize={6}
                    withArrow
                    arrowPosition='side'
                >
                    <div className={styles.trackingButton}>
                        <LiveMode disabled={!live} onChange={handleTrackingToggle} />
                    </div>
                </Tooltip>
            )}
            <RouteSearchSection
                mapRef={mapRef}
                onRoutesChange={setRoutes}
                startLiveTracking={startLiveTracking}
                stopLiveTracking={stopLiveTracking}
            />

            <MapSection
                mapRef={mapRef}
                routes={routes}
                initialLiveRoute={initialLiveRoute!}
                currentLiveRoute={currentLiveRoute!}
                isMapLoaded={isMapLoaded}
                onRoutesChange={setRoutes}
                onLoad={() => setIsMapLoaded(true)}
            />
        </div>
    )
}

export default Route
