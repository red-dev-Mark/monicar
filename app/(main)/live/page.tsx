'use client'

import { useEffect, useRef } from 'react'

import Map from '@/components/domain/map/Map'
import VehicleMarker from '@/components/domain/vehicle/VehicleMarker'
import { SOCKET_SUBSCRIPTION } from '@/constants/socket'
import { useLiveRoute } from '@/hooks/useLiveRoute'
import { useMapStatus } from '@/hooks/useMapStatus'

import * as styles from './styles.css'

const LivePage = () => {
    const mapRef = useRef<kakao.maps.Map>(null)
    const { mapState, updateMapStatus } = useMapStatus(mapRef.current)

    const { liveLocations, connectSocket, disconnectSocket } = useLiveRoute()

    useEffect(() => {
        connectSocket(SOCKET_SUBSCRIPTION.ALL_VEHICLES)
        return () => disconnectSocket()
    }, [])

    const isLargeMarkerSize = mapState.level < 10

    return (
        <div className={styles.container}>
            <Map ref={mapRef} level={mapState.level} center={mapState.center} onMapStatusChanged={updateMapStatus}>
                {liveLocations &&
                    liveLocations.map((location, index) => {
                        const vehicleInfo = {
                            vehicleId: location.id,
                            vehicleNumber: location.vehicleNumber,
                            coordinate: {
                                lat: location.lat,
                                lng: location.lng,
                            },
                        }
                        return (
                            <VehicleMarker
                                vehicleInfo={vehicleInfo}
                                markerSize={isLargeMarkerSize ? 'lg' : 'sm'}
                                key={index}
                            />
                        )
                    })}
                {/* {liveLocations && liveLocations.map((location, index) => <LiveMarker route={location} key={index} />)} */}
            </Map>
        </div>
    )
}

export default LivePage
