'use client'

import { useState } from 'react'
import { Polyline } from 'react-kakao-maps-sdk'

import RouteSearchPanel from '@/app/(dashboard)/route/components/RouteSearchPanel'
import Map from '@/components/domain/map/Map'
import { useMapControl } from '@/hooks/useMapControl'
import { styles } from '@/styles/theme.css'
import { LatLng } from '@/types/location'

import * as vars from './styles.css'

const RoutePage = () => {
    const [vehiclePaths, setVehiclePaths] = useState<LatLng[]>([])

    const { mapState, updateMapLocation } = useMapControl()

    return (
        <div className={vars.container}>
            <Map center={mapState.center} zoom={mapState.level}>
                <Polyline
                    path={[vehiclePaths]}
                    strokeWeight={5}
                    strokeColor={styles.colors.primary}
                    strokeOpacity={1}
                    strokeStyle={'solid'}
                />
            </Map>

            <RouteSearchPanel onPathsChange={setVehiclePaths} onMapLocationChange={updateMapLocation} />
        </div>
    )
}

export default RoutePage
