'use client'

import { useEffect, useState } from 'react'
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk'

import Map from '@/app/(dashboard)/location/components/Map'
import VehicleStatus from '@/app/(dashboard)/location/components/VehicleStatus'
import SearchInput from '@/components/common/Input/SearchInput'
import { INITIAL_MAP_STATE, MARKER_IMAGE } from '@/constants/map'
import mockData from '@/mock/single_vehicle_search_ok.json'
import { singleVehicleModel } from '@/types/vehicle'

import * as styles from './styles.css'

const LocationPage = () => {
    const [singleVehicle, setSingleVehicle] = useState<singleVehicleModel>()
    const [mapState, setMapState] = useState(INITIAL_MAP_STATE)
    const [showSingleVehicle, setShowSingleVehicle] = useState(false)

    useEffect(() => {
        const getSingleVehicleData = () => {
            // TODO: 실제 데이터페칭으로 수정
            const data = mockData.vehicle

            const singleVehicleData = {
                vehicleId: data.vehicleId,
                vehicleNumber: data.vehicleNumber,
                status: data.status,
                location: { lat: data.lat, lng: data.lng },
            }

            setSingleVehicle(singleVehicleData)
        }

        getSingleVehicleData()
    }, [])

    const searchSingleVehicle = () => {
        if (!singleVehicle) return

        setMapState({
            center: {
                lat: singleVehicle?.location.lat,
                lng: singleVehicle?.location.lng,
            },
            level: 7,
        })

        setShowSingleVehicle(true)
    }

    return (
        <div className={styles.container}>
            <Map center={mapState.center} zoom={mapState.level}>
                {showSingleVehicle && singleVehicle && (
                    <>
                        <MapMarker position={singleVehicle?.location} image={MARKER_IMAGE} />
                        <CustomOverlayMap position={singleVehicle?.location}>
                            <div className={styles.singleVehicleInfo}>
                                <p>{singleVehicle.vehicleNumber}</p>
                                <p>시동 {singleVehicle.status}</p>
                            </div>
                        </CustomOverlayMap>
                    </>
                )}
            </Map>
            <div className={styles.searchInputWrapper}>
                <SearchInput icon='/icons/search-icon.svg' onSubmit={searchSingleVehicle} />
            </div>
            <div className={styles.vehicleStatusWrapper}>
                <VehicleStatus />
            </div>
        </div>
    )
}

export default LocationPage
