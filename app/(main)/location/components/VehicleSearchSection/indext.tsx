'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import AutoComplete from '@/components/domain/vehicle/AutoComplete'
import { useAutoComplete } from '@/hooks/useAutoComplete'
import { useModal } from '@/hooks/useModal'
import { useQueryParams } from '@/hooks/useQueryParams'
import { validateVehicleNumber } from '@/lib/utils/validation'

import * as styles from './styles.css'

const VehicleSearchSection = () => {
    const [inputValue, setInputValue] = useState('')

    const { addQuery } = useQueryParams()
    const { isAutoCompleteVisible, autoCompleteList, hideAutoComplete } = useAutoComplete(inputValue)
    const { isModalOpen, message, closeModal, openModalWithMessage } = useModal()

    const searchParams = useSearchParams()

    useEffect(() => {
        const vehicleNumber = searchParams.get('vehicleNumber')
        if (!vehicleNumber) {
            setInputValue('')
            return
        }

        hideAutoComplete()
        setInputValue(vehicleNumber)
    }, [searchParams])

    const handleInputSubmit = async (inputValue: string) => {
        hideAutoComplete()
        const validation = validateVehicleNumber(inputValue)
        if (!validation.isValid) {
            openModalWithMessage(validation.message as string)
            return
        }

        addQuery('vehicleNumber', inputValue)
    }

    const handleAutoComplete = async (vehicleNumber: string) => {
        hideAutoComplete()
        setInputValue(vehicleNumber)
        addQuery('vehicleNumber', vehicleNumber)
    }

    return (
        <>
            <div className={styles.searchInputWrapper}>
                <SearchInput
                    icon='/icons/search-icon.svg'
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    onSubmit={() => handleInputSubmit(inputValue)}
                    style={{ borderRadius: '8px' }}
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
