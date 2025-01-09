'use client'

import { useState } from 'react'
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk'

import Map from '@/app/(dashboard)/location/components/Map'
import VehicleStatus from '@/app/(dashboard)/location/components/VehicleStatus'
import SearchInput from '@/components/common/Input/SearchInput'
import { INITIAL_MAP_STATE, MARKER_IMAGE } from '@/constants/map'

import * as styles from './styles.css'

const LocationPage = () => {
    const vehicleData = {
        vehicleId: 'V123',
        vehicleNumber: '54하7056',
        lat: 37.4295,
        lng: 127.0044,
        status: 'ON',
    }

    const [showMarker, setShowMarker] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [mapState, setMapState] = useState(INITIAL_MAP_STATE)

    const searchVehicle = () => {
        setMapState({
            center: {
                lat: vehicleData.lat,
                lng: vehicleData.lng,
            },
            level: 4,
        })
        setShowMarker(true)
    }

    return (
        <div className={styles.container}>
            <Map center={mapState.center} zoom={mapState.level}>
                {showMarker && (
                    <>
                        <MapMarker
                            position={{
                                lat: vehicleData.lat,
                                lng: vehicleData.lng,
                            }}
                            image={MARKER_IMAGE}
                            onClick={() => setIsOpen(!isOpen)}
                        />
                        {isOpen && (
                            <CustomOverlayMap
                                position={{
                                    lat: vehicleData.lat,
                                    lng: vehicleData.lng,
                                }}
                            >
                                <div>
                                    <div>
                                        <p>차량번호: {vehicleData.vehicleNumber}</p>
                                        <p>상태: {vehicleData.status}</p>
                                    </div>
                                    <button onClick={() => setIsOpen(false)}>닫기</button>
                                </div>
                            </CustomOverlayMap>
                        )}
                    </>
                )}
            </Map>
            <div className={styles.searchInputWrapper}>
                <SearchInput icon='/icons/search-icon.svg' onSubmit={searchVehicle} />
            </div>
            <div className={styles.vehicleStatusWrapper}>
                <VehicleStatus />
            </div>
        </div>
    )
}

export default LocationPage
