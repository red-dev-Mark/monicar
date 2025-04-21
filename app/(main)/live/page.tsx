'use client'

import { useEffect, useRef } from 'react'

import Map from '@/components/domain/map/Map'
import { LiveMarker } from '@/components/domain/vehicle/LiveMarker'
import { useLiveRoute } from '@/hooks/useLiveRoute'
import { useMapStatus } from '@/hooks/useMapStatus'

import * as styles from './styles.css'

const LivePage = () => {
    const mapRef = useRef<kakao.maps.Map>(null)
    const { mapState } = useMapStatus(mapRef.current)

    const { currentLocations, connectSocket, disconnectSocket } = useLiveRoute()

    useEffect(() => {
        connectSocket()

        return () => disconnectSocket()
    }, [])

    return (
        <div className={styles.container}>
            <Map ref={mapRef} level={mapState.level} center={mapState.center}>
                {currentLocations &&
                    currentLocations.map((location, index) => <LiveMarker route={location} key={index} />)}
            </Map>
        </div>
    )
}

export default LivePage
