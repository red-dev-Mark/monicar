'use client'

import { useState } from 'react'
import { Polyline } from 'react-kakao-maps-sdk'

import RouteSearchPanel from '@/app/route/components/RouteSearchPanel'
import Map from '@/components/domain/map/Map'
import { useMapControl } from '@/hooks/useMapControl'
import { vars } from '@/styles/theme.css'
import { LatLng } from '@/types/location'

import * as styles from './styles.css'

const RoutePage = () => {
    const [vehiclePaths, setVehiclePaths] = useState<LatLng[]>([])

    const { mapState, updateMapLocation } = useMapControl()

    return (
        <div className={styles.container}>
            <Map center={mapState.center} zoom={mapState.level}>
                <Polyline
                    path={[vehiclePaths]}
                    strokeWeight={5}
                    strokeColor={vars.colors.primary}
                    strokeOpacity={1}
                    strokeStyle={'solid'}
                />
            </Map>

            <RouteSearchPanel onPathsChange={setVehiclePaths} onMapLocationChange={updateMapLocation} />
        </div>
    )
}

export default RoutePage
