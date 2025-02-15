'use client'

import { ChangeEventHandler, useEffect, useRef, useState } from 'react'

import MapSection from '@/app/(main)/location/components/MapSection'
import VehicleStatusPanel from '@/app/(main)/location/components/VehicleStatusPanel'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import AutoComplete from '@/components/domain/vehicle/AutoComplete'
import { MAP_CONFIG } from '@/constants/map'
import { useAutoComplete } from '@/hooks/useAutoComplete'
import { useMapStatus } from '@/hooks/useMapStatus'
import { useModal } from '@/hooks/useModal'
import { useQueryParams } from '@/hooks/useQueryParams'
import { useVehicleDisclosure } from '@/hooks/useVehicleDisclosure'
import { vehicleService } from '@/lib/apis'
import { getVehicleInfo } from '@/lib/services/vehicle'
import { useVehicleVisibleStore } from '@/stores/useVehicleVisibleStore'
import { VehicleDetail, VehicleLocation } from '@/types/vehicle'

import * as styles from './styles.css'

const Location = () => {
    const [vehicleLocation, setVehicleLocation] = useState<VehicleLocation>()
    const [vehicleDetail, setVehicleDetail] = useState<VehicleDetail>()

    const mapRef = useRef<kakao.maps.Map>(null)

    const { inputValue, setInputValue } = useVehicleVisibleStore()

    const { isModalOpen, message, closeModal, openModalWithMessage } = useModal()
    const { controlMapStatus } = useMapStatus(mapRef.current)
    const { showSearchedVehicle, hideSelectedVehicle } = useVehicleDisclosure()
    const { autoCompleteList } = useAutoComplete(inputValue)

    const { clearAllQueries } = useQueryParams()

    useEffect(() => {
        return () => clearAllQueries()
    }, [])

    const handleInputSubmit = async () => {
        try {
            const vehicleInfoResult = await getVehicleInfo(inputValue)

            if (!vehicleInfoResult.data) return

            const vehicleLoctaion = vehicleInfoResult.data as VehicleLocation
            setVehicleLocation(vehicleLoctaion)

            const { vehicleId } = vehicleLoctaion
            const vehicleDetailResult = await vehicleService.getVehicleDetail(vehicleId)

            console.log(vehicleDetailResult)

            if (!vehicleDetailResult.isValid) throw new Error(vehicleDetailResult.value)

            hideSelectedVehicle()

            setVehicleDetail(vehicleDetailResult.value)
            showSearchedVehicle(inputValue)

            controlMapStatus(
                {
                    lat: vehicleLoctaion.coordinate.lat,
                    lng: vehicleLoctaion.coordinate.lng,
                },
                MAP_CONFIG.SEARCH_VEHICLE.ZOOM_INCREMENT,
            )
        } catch (error) {
            if (error instanceof Error) {
                openModalWithMessage?.(error.message)
            }
        }
    }

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
        const inputValue = event.target.value
        setInputValue(inputValue)
    }

    const isAutoCompleteVisible = autoCompleteList.length > 0
    console.log(vehicleDetail)
    return (
        <div className={styles.container}>
            <MapSection
                mapRef={mapRef}
                vehicleInfo={vehicleLocation as VehicleLocation}
                searchedDetail={vehicleDetail as VehicleDetail}
            />
            <div className={styles.searchInputWrapper}>
                <SearchInput
                    icon='/icons/search-icon.svg'
                    value={inputValue}
                    onChange={handleInputChange}
                    onSubmit={handleInputSubmit}
                />
                {isAutoCompleteVisible && <AutoComplete list={autoCompleteList} onClick={handleInputSubmit} />}
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
