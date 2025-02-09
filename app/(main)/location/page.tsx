'use client'

import { ChangeEventHandler, useRef, useState } from 'react'

import MapSection from '@/app/(main)/location/components/MapSection'
import VehicleStatusPanel from '@/app/(main)/location/components/VehicleStatusPanel'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { MAP_CONFIG } from '@/constants/map'
import { useDisclosure } from '@/hooks/useDisclosure'
import { useMapStatus } from '@/hooks/useMapStatus'
import { useVehicleLocationSearch } from '@/hooks/useVehicleLocationSearch'
import { vehicleService } from '@/lib/apis'
import { VehicleDetail, VehicleLocation } from '@/types/vehicle'

import * as styles from './styles.css'

const LocationPage = () => {
    const [inputValue, setInputValue] = useState('')
    const [vehicleDetail, setVehicleDetail] = useState<VehicleDetail>()

    const { vehicleInfo, isModalOpen, message, closeModal, searchVehicleWithNumber } =
        useVehicleLocationSearch(inputValue)
    const [isSearchedVehicleVisible, { open: showSearchedVehicle, close: hideSearchedVehicle }] = useDisclosure()
    const [isVehicleDetailCardVisible, { open: showVehicleDetailCard, close: hideVehicleDetailCard }] = useDisclosure()

    const mapRef = useRef<kakao.maps.Map>(null)

    const { controlMapStatus } = useMapStatus(mapRef.current)

    const handleInputSubmit = async () => {
        const vehicleInfo = await searchVehicleWithNumber()

        if (!vehicleInfo) return

        const { vehicleId } = vehicleInfo as VehicleLocation
        const vehicleDetail = await vehicleService.getVehicleDetail(vehicleId)

        controlMapStatus(MAP_CONFIG.SEARCH_VEHICLE.ZOOM_INCREMENT, {
            lat: vehicleInfo.coordinate.lat,
            lng: vehicleInfo.coordinate.lng,
        })

        setVehicleDetail(vehicleDetail)
        showSearchedVehicle()
        showVehicleDetailCard()
    }

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div className={styles.container}>
            <MapSection
                mapRef={mapRef}
                vehicleInfo={vehicleInfo as VehicleLocation}
                vehicleDetail={vehicleDetail as VehicleDetail}
                isSearchedVehicleVisible={isSearchedVehicleVisible}
                isDetailCardVisible={isVehicleDetailCardVisible}
                onVehicleClose={hideSearchedVehicle}
                onDetailCardOpen={showVehicleDetailCard}
                onDetailCardClose={hideVehicleDetailCard}
            />
            <div className={styles.searchInputWrapper}>
                <SearchInput
                    icon='/icons/search-icon.svg'
                    value={inputValue}
                    onChange={handleInputChange}
                    onSubmit={handleInputSubmit}
                />
            </div>
            <VehicleStatusPanel />

            <Modal
                isOpen={isModalOpen}
                message={message as ModalMessageType}
                variant={{ variant: 'alert', confirmButton: '확인' }}
                onClose={closeModal}
            />
        </div>
    )
}

export default LocationPage
