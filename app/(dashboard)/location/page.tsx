'use client'

import { useState } from 'react'
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk'

import VehicleDetailsCard from '@/app/(dashboard)/location/components/VehicleDetailsCard'
import VehicleStatus from '@/app/(dashboard)/location/components/VehicleStatus'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import Map from '@/components/domain/map/Map'
import { MARKER_IMAGE } from '@/constants/map'
import { useSearchSingleVehicle } from '@/hooks/useSearchSingleVehicle'

import * as styles from './styles.css'

const LocationPage = () => {
    const [showDetailsCard, setShowDetailsCard] = useState(false)

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

    return (
        <div className={styles.container}>
            <Map center={mapState.center} zoom={mapState.level}>
                {showSingleVehicle && singleVehicle && (
                    <>
                        <MapMarker position={singleVehicle?.location} image={MARKER_IMAGE} />
                        <CustomOverlayMap position={singleVehicle?.location}>
                            <div
                                className={styles.singleVehicleInfo}
                                onClick={() => setShowDetailsCard(true)}
                                role='presentation'
                            >
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
                    onSubmit={handleVehicleSearch}
                />
            </div>

            <VehicleStatus />
            {showDetailsCard && <VehicleDetailsCard onCloseButtonClick={setShowDetailsCard} />}

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
