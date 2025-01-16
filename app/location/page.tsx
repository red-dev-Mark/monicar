'use client'

import { useState } from 'react'
import { MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk'

import VehicleDetailsCard from '@/app/location/components/VehicleDetailsCard'
import VehicleMarker from '@/app/location/components/VehicleMarker'
import VehicleStatus from '@/app/location/components/VehicleStatus'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import Map from '@/components/domain/map/Map'
import { MARKER_IMAGE } from '@/constants/map'
import { useSearchSingleVehicle } from '@/hooks/useSearchSingleVehicle'
import { vehicleAPI } from '@/lib/apis'
import koreaLocation from '@/mock/metropolitan_coordinates.json'
import { styles as vars } from '@/styles/theme.css'
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
                <MarkerClusterer
                    averageCenter={true}
                    styles={[
                        {
                            width: '40px',
                            height: '40px',
                            background: '#ed968490',
                            borderRadius: '50%',
                            color: vars.colors.black,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold',
                        },
                        {
                            width: '60px',
                            height: '60px',
                            background: '#008a8590',
                            borderRadius: '50%',
                            color: vars.colors.black,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold',
                        },
                        {
                            width: '80px',
                            height: '80px',
                            background: '#ff385c80',
                            borderRadius: '50%',
                            color: vars.colors.black,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold',
                        },
                    ]}
                    calculator={[10, 30, 50]}
                    gridSize={100}
                >
                    {koreaLocation.map((marker, index) => (
                        <MapMarker key={index} position={marker} image={MARKER_IMAGE} />
                    ))}
                </MarkerClusterer>
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
