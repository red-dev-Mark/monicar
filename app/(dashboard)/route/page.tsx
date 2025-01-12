'use client'

import { useState } from 'react'
import { Polyline } from 'react-kakao-maps-sdk'

import Map from '@/app/(dashboard)/location/components/Map'
import RouteSearchPanel from '@/app/(dashboard)/route/components/RouteSearchPanel'
import { DateTime } from '@/app/(dashboard)/route/types/date'
import { INITIAL_MAP_STATE } from '@/constants/map'
import { styles } from '@/styles/theme.css'
import { PathPoint } from '@/types/location'

import * as vars from './styles.css'

const RoutePage = () => {
    const [vehiclePaths, setVehiclePaths] = useState<PathPoint[]>([])
    const [mapStatus, setMapStatus] = useState(INITIAL_MAP_STATE)
    const [startDate, setStartDate] = useState<DateTime>({ year: '', month: '', date: '', hour: '', minute: '' })
    const [endDate, setEndDate] = useState<DateTime>({ year: '', month: '', date: '', hour: '', minute: '' })

    return (
        <div className={vars.container}>
            <Map center={mapStatus.center} zoom={mapStatus.level}>
                <Polyline
                    path={[vehiclePaths]}
                    strokeWeight={5}
                    strokeColor={styles.colors.primary}
                    strokeOpacity={1}
                    strokeStyle={'solid'}
                />
            </Map>

            <RouteSearchPanel
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                vehiclePaths={vehiclePaths}
                setVehiclePaths={setVehiclePaths}
                setMapStatus={setMapStatus}
            />
        </div>
    )
}

export default RoutePage
