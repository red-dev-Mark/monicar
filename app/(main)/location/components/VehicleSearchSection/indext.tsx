'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import AutoComplete from '@/components/domain/vehicle/AutoComplete'
import { MAP_CONFIG } from '@/constants/map'
import { useAutoComplete } from '@/hooks/useAutoComplete'
import { useMapStatus } from '@/hooks/useMapStatus'
import { useModal } from '@/hooks/useModal'
import { useQueryParams } from '@/hooks/useQueryParams'
import { getVehicleInfo } from '@/lib/services/vehicle'
import { MapRefType } from '@/types/map'

import * as styles from './styles.css'

interface VehicleSearchSectionProps {
    mapRef: MapRefType
    isMapLoaded: boolean
}

const VehicleSearchSection = ({ mapRef, isMapLoaded }: VehicleSearchSectionProps) => {
    const [inputValue, setInputValue] = useState('')

    const { controlMapStatus } = useMapStatus(mapRef.current)
    const { addQueries } = useQueryParams()
    const { isAutoCompleteVisible, autoCompleteList, hideAutoComplete } = useAutoComplete(inputValue)
    const { isModalOpen, message, closeModal, openModalWithMessage } = useModal()

    const searchParams = useSearchParams()

    useEffect(() => {
        const vehicleNumber = searchParams.get('vehicleNumber')
        if (!vehicleNumber || !isMapLoaded) return

        setInputValue(vehicleNumber)
        handleInputSubmit(vehicleNumber)
    }, [searchParams, isMapLoaded])

    const handleInputSubmit = async (inputValue: string) => {
        try {
            const result = await getVehicleInfo(inputValue)
            if (!result.isSuccess || !result.data) throw new Error(result.error || '')

            const {
                vehicleId,
                vehicleNumber,
                coordinate: { lat, lng },
            } = result.data

            addQueries({
                vehicleId,
                vehicleNumber,
                lat,
                lng,
            })
            controlMapStatus({ lat, lng }, MAP_CONFIG.SEARCH_VEHICLE.ZOOM_INCREMENT)
        } catch (error) {
            if (error instanceof Error) {
                openModalWithMessage?.(error.message)
            } else {
                openModalWithMessage?.('알 수 없는 오류가 발생했습니다')
            }
        } finally {
            hideAutoComplete()
        }
    }

    const handleAutoComplete = async (vehicleNumber: string) => {
        setInputValue(vehicleNumber)
        await handleInputSubmit(vehicleNumber)
    }

    return (
        <>
            <div className={styles.searchInputWrapper}>
                <SearchInput
                    icon='/icons/search-icon.svg'
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    onSubmit={() => handleInputSubmit(inputValue)}
                />
                {isAutoCompleteVisible && <AutoComplete list={autoCompleteList} onClick={handleAutoComplete} />}
            </div>

            <Modal
                isOpen={isModalOpen}
                message={message as ModalMessageType}
                variant={{ variant: 'alert', confirmButton: '확인' }}
                onClose={closeModal}
            />
        </>
    )
}

export default VehicleSearchSection
