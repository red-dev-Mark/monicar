'use client'

import { useEffect, useRef } from 'react'

import MapSection from '@/app/(main)/live/components/MapSection'
import { useLiveRoute } from '@/hooks/useLiveRoute'

import * as styles from './styles.css'

const LivePage = () => {
    const { currentLocations, connectSocket, disconnectSocket } = useLiveRoute()

    const mapRef = useRef<kakao.maps.Map>(null)

    useEffect(() => {
        connectSocket()
        return () => disconnectSocket()
    }, [])

    return (
        <div className={styles.container}>
            <MapSection mapRef={mapRef} currentLocations={currentLocations!} />
        </div>
    )
}

export default LivePage
