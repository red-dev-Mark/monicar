'use client'

import { useState } from 'react'

import VehicleDetailsCard from '@/app/(dashboard)/location/components/VehicleDetailsCard'
import VehicleMarker from '@/app/(dashboard)/location/components/VehicleMarker'
import VehicleStatus from '@/app/(dashboard)/location/components/VehicleStatus'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import Map from '@/components/domain/map/Map'
import { useSearchSingleVehicle } from '@/hooks/useSearchSingleVehicle'
import { vehicleAPI } from '@/lib/apis'
import { VehicleDetailsModel } from '@/types/vehicle'

import * as styles from './styles.css'

const LocationPage = () => {
    const [isDetailsCardVisible, setIsDetailsCardVisible] = useState(false)
    const [vehicleDetails, setVehicleDetails] = useState<VehicleDetailsModel>()

    const {
        vehicleInfo,
        mapState,
        isVehicleVisible,
        searchTerm,
        modalMessage,
        isOpen,
        handleVehicleSearch,
        handleSearchChange,
        closeModal,
    } = useSearchSingleVehicle()

    const handleVehicleClick = async () => {
        const vehicleDetailsData = await vehicleAPI.fetchVehicleDetails()

        if (!vehicleDetailsData) return

        setVehicleDetails(vehicleDetailsData)
        setIsDetailsCardVisible(true)
    }

    const isVehicleMarkerVisible = isVehicleVisible && vehicleInfo
    const isVehicleDetailsVisible = isDetailsCardVisible && vehicleDetails

    return (
        <div className={styles.container}>
            <Map center={mapState.center} zoom={mapState.level}>
                {isVehicleMarkerVisible && (
                    <VehicleMarker vehicleInfo={vehicleInfo} onVehicleClick={handleVehicleClick} />
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
                <VehicleDetailsCard vehicleDetails={vehicleDetails} onCloseButtonClick={setIsDetailsCardVisible} />
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
