'use client'

import { useRef, useState } from 'react'

import MapSection from '@/app/(main)/route/components/MapSection'
import RouteSearchSection from '@/app/(main)/route/components/RouteSearchSection'
import { LatLng } from '@/types/map'

import * as styles from './styles.css'

const RoutePage = () => {
    const [routes, setRoutes] = useState<LatLng[]>([])

    const mapRef = useRef<kakao.maps.Map>(null)

    return (
        <div className={styles.container}>
            <RouteSearchSection mapRef={mapRef} onRoutesChange={setRoutes} />
            <MapSection mapRef={mapRef} routes={routes} />
        </div>
    )
}

export default RoutePage
