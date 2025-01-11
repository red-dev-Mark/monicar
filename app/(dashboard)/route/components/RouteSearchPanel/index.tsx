'use client'

import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'

import DateTimeSelect from '@/app/(dashboard)/route/components/RouteSearchPanel/DateTimeSelect'
import SquareButton from '@/components/common/Button/SquareButton'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { useModal } from '@/hooks/useModal'
import { useSearchVehicle } from '@/hooks/useSearchVehicle'

import * as styles from './styles.css'

interface RouteSearchPanelProps {
    startDate: {
        year: string
        month: string
        date: string
        hour: string
        minute: string
    }
    endDate: {
        year: string
        month: string
        date: string
        hour: string
        minute: string
    }
    setStartDate: Dispatch<
        SetStateAction<{
            year: string
            month: string
            date: string
            hour: string
            minute: string
        }>
    >
    setEndDate: Dispatch<
        SetStateAction<{
            year: string
            month: string
            date: string
            hour: string
            minute: string
        }>
    >
    onButtonClick?: () => void
    setIsSearchable: (searchable: boolean) => void
}

const RouteSearchPanel = ({
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    // onButtonClick,
    setIsSearchable,
}: RouteSearchPanelProps) => {
    const [inputVehicleNumber, setInputVehicleNumber] = useState('')
    const [searchableDates, setSearchableDates] = useState({ firstDateAt: '', lastDateAt: '' })
    const { searchVehicle, vehicleData, isOpen, modalMessage, closeModal } = useSearchVehicle(inputVehicleNumber)
    const { showMessage } = useModal()

    useEffect(() => {
        if (vehicleData?.searchableDate) {
            setSearchableDates(vehicleData.searchableDate)
        }
    }, [vehicleData])

    const handleButtonClick = () => {
        const isSearchableStartDate =
            new Date(
                `${startDate.year}-${startDate.month}-${startDate.date}T${startDate.hour}:${startDate.minute}:00`,
            ).getTime() > new Date(searchableDates.firstDateAt).getTime()

        const isSearchableEndDate =
            new Date(
                `${endDate.year}-${endDate.month}-${endDate.date}T${endDate.hour}:${endDate.minute}:00`,
            ).getTime() < new Date(searchableDates.lastDateAt).getTime()

        const formattedStartDate = new Date(
            `${startDate.year}-${startDate.month}-${startDate.date}T${startDate.hour}:${startDate.minute}:00`,
        ).getTime()
        const formattedEndDate = new Date(
            `${endDate.year}-${endDate.month}-${endDate.date}T${endDate.hour}:${endDate.minute}:00`,
        ).getTime()

        if (formattedStartDate >= formattedEndDate) {
            showMessage('종료 일시는 시작 일시보다 같거나 빠르면 안됩니다')
            alert('종료 일시는 시작 일시보다 같거나 빠르면 안됩니다')
        } else if (isSearchableStartDate && isSearchableEndDate) {
            setIsSearchable(true)
            alert('조회 가능!')
        } else {
            alert(`조회 가능한 일은 ${searchableDates.firstDateAt} ~ ${searchableDates.lastDateAt}`)
            setIsSearchable(false)
        }
    }

    const isButtonDisabled = Boolean(vehicleData)

    return (
        <div className={styles.panel}>
            <div className={styles.searchSection}>
                <h3 className={styles.sectionTitle}>차량 검색</h3>
                <SearchInput
                    value={inputVehicleNumber}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setInputVehicleNumber(event.target.value)}
                    onSubmit={searchVehicle}
                    placeholder='차량번호 검색'
                    icon='/icons/pink-search-icon.svg'
                    style={{
                        borderRadius: '8px',
                        boxShadow: 'none',
                    }}
                />
            </div>

            <div className={styles.searchSection}>
                <h3 className={styles.sectionTitle}>기간 검색</h3>
                <DateTimeSelect
                    label='시작 일시'
                    disabled={!isButtonDisabled}
                    date={startDate}
                    setDate={setStartDate}
                />
                <DateTimeSelect label='종료 일시' disabled={!isButtonDisabled} date={endDate} setDate={setEndDate} />
            </div>
            <SquareButton disabled={!isButtonDisabled} onClick={handleButtonClick}>
                조회하기
            </SquareButton>

            <Modal
                isOpen={isOpen}
                message={modalMessage as ModalMessageType}
                variant={{ variant: 'alert', confirmButton: '확인' }}
                onClose={closeModal}
            />
        </div>
    )
}

export default RouteSearchPanel
