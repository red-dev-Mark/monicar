'use client'

import { useState } from 'react'
import { Polyline } from 'react-kakao-maps-sdk'

import Map from '@/app/(dashboard)/location/components/Map'
import RouteSearchPanel from '@/app/(dashboard)/route/components/RouteSearchPanel'
import { useMapControl } from '@/hooks/useMapControl'
import { styles } from '@/styles/theme.css'
import { PathPoint } from '@/types/location'

import * as vars from './styles.css'

const RoutePage = () => {
    const [vehiclePaths, setVehiclePaths] = useState<PathPoint[]>([])

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

            <RouteSearchPanel
                vehiclePaths={vehiclePaths}
                setVehiclePaths={setVehiclePaths}
                updateMapLocation={updateMapLocation}
            />
        </div>
    )
}

export default RoutePage
