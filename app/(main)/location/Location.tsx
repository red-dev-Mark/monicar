'use client'

import { ChangeEventHandler, useEffect, useRef, useState } from 'react'

import MapSection from '@/app/(main)/location/components/MapSection'
import VehicleStatusPanel from '@/app/(main)/location/components/VehicleStatusPanel'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { MAP_CONFIG } from '@/constants/map'
import { useMapStatus } from '@/hooks/useMapStatus'
import { useVehicleDisclosure } from '@/hooks/useVehicleDisclosure'
import { useVehicleLocationSearch } from '@/hooks/useVehicleLocationSearch'
import { vehicleService } from '@/lib/apis'
import { cleanUrlParams } from '@/lib/utils/url'
import { useVehicleVisibleStore } from '@/stores/useVehicleVisibleStore'
import { VehicleDetail, VehicleLocation } from '@/types/vehicle'

import * as styles from './styles.css'

const Location = () => {
    const [vehicleDetail, setVehicleDetail] = useState<VehicleDetail>()

    const mapRef = useRef<kakao.maps.Map>(null)

    const { controlMapStatus } = useMapStatus(mapRef.current)
    const { showSearchedVehicle, hideSelectedVehicle } = useVehicleDisclosure()
    const { inputValue, setInputValue } = useVehicleVisibleStore()
    const { vehicleInfo, isModalOpen, message, closeModal, searchVehicleWithNumber } =
        useVehicleLocationSearch(inputValue)

    useEffect(() => {
        return () => cleanUrlParams()
    }, [])

    const handleInputSubmit = async () => {
        const vehicleInfo = await searchVehicleWithNumber()

        if (!vehicleInfo) return

        const { vehicleId } = vehicleInfo as VehicleLocation
        const vehicleDetail = await vehicleService.getVehicleDetail(vehicleId)

        hideSelectedVehicle()

        setVehicleDetail(vehicleDetail)
        showSearchedVehicle(inputValue)

        controlMapStatus(
            {
                lat: vehicleInfo.coordinate.lat,
                lng: vehicleInfo.coordinate.lng,
            },
            MAP_CONFIG.SEARCH_VEHICLE.ZOOM_INCREMENT,
        )
    }

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div className={styles.container}>
            <MapSection
                mapRef={mapRef}
                vehicleInfo={vehicleInfo as VehicleLocation}
                searchedDetail={vehicleDetail as VehicleDetail}
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

export default Location
