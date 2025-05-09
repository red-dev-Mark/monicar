'use client'

import { Tooltip } from '@mantine/core'
import { useSearchParams } from 'next/navigation'
import { useRef, useState } from 'react'

import MapSection from '@/app/(main)/route/components/MapSection'
import RouteSearchSection from '@/app/(main)/route/components/RouteSearchSection'
import LiveMode from '@/components/common/LiveMode'
import { useLiveVehicle } from '@/hooks/useLiveVehicle'
import { useQueryParams } from '@/hooks/useQueryParams'
import { vars } from '@/styles/theme.css'
import { LatLng } from '@/types/map'

import * as styles from './styles.css'

const Route = () => {
    const [routes, setRoutes] = useState<LatLng[]>([])
    const [isMapLoaded, setIsMapLoaded] = useState(false)

    const { addQuery, removeQuery } = useQueryParams()
    const { liveLocation, startLiveTracking, stopLiveTracking } = useLiveVehicle()

    const mapRef = useRef<kakao.maps.Map>(null)

    const searchParams = useSearchParams()

    const live = searchParams.get('live') === 'true'

    const handleTrackingToggle = (isClicked: boolean) => {
        if (isClicked) {
            addQuery('tracking', 'true')
        } else {
            removeQuery('tracking')
        }
    }

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
                        <LiveMode onChange={handleTrackingToggle} />
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
                liveLocation={liveLocation!}
                isMapLoaded={isMapLoaded}
                onRoutesChange={setRoutes}
                onLoad={() => setIsMapLoaded(true)}
            />
        </div>
    )
}

export default Route
