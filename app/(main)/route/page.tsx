'use client'

import { useRef, useState } from 'react'

import MapSection from '@/app/(main)/route/components/MapSection'
import RouteSearchPanel from '@/app/(main)/route/components/RouteSearchPanel'
import { useMapStatus } from '@/hooks/useMapStatus'
import { LatLng } from '@/types/map'

import * as styles from './styles.css'

const RoutePage = () => {
    const [vehiclePaths, setVehiclePaths] = useState<LatLng[]>([])

    const mapRef = useRef<kakao.maps.Map>(null)

    const { mapState } = useMapStatus(mapRef.current)

    return (
        <div className={styles.container}>
            <MapSection mapState={mapState} vehiclePaths={vehiclePaths} />
            <RouteSearchPanel onPathsChange={setVehiclePaths} />
        </div>
    )
}

export default RoutePage
