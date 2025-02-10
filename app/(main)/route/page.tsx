'use client'

import { useState } from 'react'

import MapSection from '@/app/(main)/route/components/MapSection'
import RouteSearchPanel from '@/app/(main)/route/components/RouteSearchPanel'
import { useMapControl } from '@/hooks/useMapControl'
import { LatLng } from '@/types/map'

import * as styles from './styles.css'

const RoutePage = () => {
    const [vehiclePaths, setVehiclePaths] = useState<LatLng[]>([])

    const { mapState } = useMapControl()

    return (
        <div className={styles.container}>
            <MapSection mapState={mapState} vehiclePaths={vehiclePaths} />
            <RouteSearchPanel onPathsChange={setVehiclePaths} />
        </div>
    )
}

export default RoutePage
