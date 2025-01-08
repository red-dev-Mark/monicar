'use client'

import { useEffect, useState } from 'react'
import { MapMarker } from 'react-kakao-maps-sdk'

import Map from '@/app/(dashboard)/location/components/Map'
import RouteSearchPanel from '@/app/(dashboard)/route/components/RouteSearchPanel'
import mockRoutesData from '@/mock/routes.json'

import * as styles from './styles.css'

const RoutePage = () => {
    const [paths, setPaths] = useState([{ id: '', lat: 0, lng: 0 }])

    useEffect(() => {
        const routesData = mockRoutesData.result.routes.map((route) => ({
            id: route.timestamp,
            lat: route.lat,
            lng: route.lon,
        }))

        setPaths(routesData)
    }, [])

    return (
        <div className={styles.container}>
            <Map zoom={12} center={paths[paths.length / 2]}>
                {paths.map((path) => {
                    return <MapMarker key={path.id} position={path} />
                })}
            </Map>
            <RouteSearchPanel />
        </div>
    )
}

export default RoutePage
