'use client'

import { useEffect, useRef, useState } from 'react'

import Map from '@/components/domain/map/Map'
import VehicleMarker from '@/components/domain/vehicle/VehicleMarker'
import { SOCKET_SUBSCRIPTION } from '@/constants/socket'
import { useMapStatus } from '@/hooks/useMapStatus'
import { socket } from '@/lib/socket'
import { normalizeCoordinate } from '@/lib/utils/normalize'
import { LiveRoute } from '@/types/route'

import * as styles from './styles.css'

const LivePage = () => {
    const [vehicles, setVehicles] = useState<LiveRoute[] | null>(null)

    const mapRef = useRef<kakao.maps.Map>(null)
    const { mapState, updateMapStatus } = useMapStatus(mapRef.current)

    useEffect(() => {
        socket.connect(SOCKET_SUBSCRIPTION.ALL_VEHICLES, normalizeVehicleLocations)
        return () => socket.disconnect()
    }, [])

    function normalizeVehicleLocations(message: string) {
        const locations = JSON.parse(message).map((item: string) => JSON.parse(item))
        const normalizedLocations = locations.map((location: LiveRoute) => {
            return {
                ...location,
                lat: normalizeCoordinate(location.lat),
                lng: normalizeCoordinate(location.lng),
            }
        })
        setVehicles(normalizedLocations)
    }

    const isLargeMarkerSize = mapState.level < 10

    return (
        <div className={styles.container}>
            <Map ref={mapRef} level={mapState.level} center={mapState.center} onMapStatusChanged={updateMapStatus}>
                {vehicles &&
                    vehicles.map((location, index) => {
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
            </Map>
        </div>
    )
}

export default LivePage
