'use client'

import { useEffect, useState } from 'react'
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk'

import VehicleDetailsCard from '@/app/(dashboard)/location/components/VehicleDetailsCard'
import VehicleStatus from '@/app/(dashboard)/location/components/VehicleStatus'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import Map from '@/components/domain/map/Map'
import { MARKER_IMAGE } from '@/constants/map'
import { useSearchSingleVehicle } from '@/hooks/useSearchSingleVehicle'
import { vehicleAPI } from '@/lib/apis'
import { vehicleDetailsModel } from '@/types/vehicle'

import * as styles from './styles.css'

const LocationPage = () => {
    const [showDetailsCard, setShowDetailsCard] = useState(false)
    const [vehicleDetails, setVehicleDetails] = useState<vehicleDetailsModel>()
    const [isMapLoaded, setIsMapLoaded] = useState(false)

    const {
        singleVehicle,
        mapState,
        showSingleVehicle,
        searchTerm,
        modalMessage,
        isOpen,
        handleVehicleSearch,
        handleSearchChange,
        closeModal,
    } = useSearchSingleVehicle()

    useEffect(() => {
        if (!isMapLoaded) return

        // const geocoder = new kakao.maps.services.Geocoder()
    }, [isMapLoaded])

    const handleVehicleClick = async () => {
        const vehicleDetailsData = await vehicleAPI.fetchVehicleDetails()

        if (!vehicleDetailsData) return
        setVehicleDetails(vehicleDetailsData)
        setShowDetailsCard(true)
    }

    const isVehicleDetailsVisible = showDetailsCard && vehicleDetails

    return (
        <div className={styles.container}>
            <Map center={mapState.center} zoom={mapState.level} onLoad={setIsMapLoaded}>
                {showSingleVehicle && singleVehicle && (
                    <>
                        <MapMarker position={singleVehicle?.location} image={MARKER_IMAGE} />
                        <CustomOverlayMap position={singleVehicle?.location}>
                            <div className={styles.vehicleCard} onClick={handleVehicleClick} role='presentation'>
                                <p className={styles.vehicleInfo}>{singleVehicle.vehicleNumber}</p>
                                <p className={styles.description}>클릭하시면, 상세 정보를 확인할 수 있습니다</p>
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
                    onSubmit={handleVehicleSearch}
                />
            </div>

            <VehicleStatus />

            {isVehicleDetailsVisible && (
                <VehicleDetailsCard vehicleDetails={vehicleDetails} onCloseButtonClick={setShowDetailsCard} />
            )}

            <Modal
                isOpen={isOpen}
                message={modalMessage as ModalMessageType}
                variant={{ variant: 'alert', confirmButton: '확인' }}
                onClose={closeModal}
            />
        </div>
    )
}

export default LocationPage
