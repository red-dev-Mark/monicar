'use client'

import { ChangeEventHandler, useState } from 'react'
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk'

import Map from '@/app/(dashboard)/location/components/Map'
import VehicleStatus from '@/app/(dashboard)/location/components/VehicleStatus'
import SearchInput from '@/components/common/Input/SearchInput'
import { MARKER_IMAGE } from '@/constants/map'
import { useSearchSingleVehicle } from '@/hooks/useSearchSingleVehicle'

import * as styles from './styles.css'

const LocationPage = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const { singleVehicle, mapState, showSingleVehicle, searchSingleVehicle } = useSearchSingleVehicle(searchTerm)

    const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearchTerm(event.target.value)
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
                <SearchInput
                    icon='/icons/search-icon.svg'
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onSubmit={searchSingleVehicle}
                />
            </div>
            <div className={styles.vehicleStatusWrapper}>
                <VehicleStatus />
            </div>
        </div>
    )
}

export default LocationPage
