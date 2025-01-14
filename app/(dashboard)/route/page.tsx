'use client'

import { useEffect, useState } from 'react'
import { Polyline } from 'react-kakao-maps-sdk'

import RouteSearchPanel from '@/app/(dashboard)/route/components/RouteSearchPanel'
import Map from '@/components/domain/map/Map'
import mockRoutesData from '@/mock/vehicle_route_data.json'
import { styles } from '@/styles/theme.css'
import { PathPoint } from '@/types/location'

import * as vars from './styles.css'

const RoutePage = () => {
    const [paths, setPaths] = useState<PathPoint[]>([])

    useEffect(() => {
        const routesData = mockRoutesData.result.routes.map((route) => ({
            id: route.timestamp,
            lat: route.lat,
            lng: route.lon,
        }))

        setPaths(routesData)
    }, [])

    return (
        <div className={vars.container}>
            <Map zoom={11} center={paths[paths.length / 2]}>
                <Polyline
                    path={[paths]}
                    strokeWeight={5}
                    strokeColor={styles.colors.primary}
                    strokeOpacity={1}
                    strokeStyle={'solid'}
                />
            </Map>

            <RouteSearchPanel />
        </div>
    )
}

export default RoutePage
