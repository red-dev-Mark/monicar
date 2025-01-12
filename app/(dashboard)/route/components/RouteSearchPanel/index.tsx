'use client'

import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'

import DateTimeSelect from '@/app/(dashboard)/route/components/RouteSearchPanel/DateTimeSelect'
import { DateTime } from '@/app/(dashboard)/route/types/date'
import SquareButton from '@/components/common/Button/SquareButton'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { useSearchVehicle } from '@/hooks/useSearchVehicle'
import { formatISODateToKorean } from '@/lib/utils/date'
import { validateDateRange } from '@/lib/utils/validation'
import mockRoutesData from '@/mock/vehicle_route_data.json'
import { LatLng } from '@/types/location'

import * as styles from './styles.css'

interface RouteSearchPanelProps {
    paths: LatLng[]
    onPathsChange: Dispatch<SetStateAction<LatLng[]>>
    onMapLocationChange: (location: LatLng, level: number) => void
}

const RouteSearchPanel = ({ onPathsChange, onMapLocationChange, paths }: RouteSearchPanelProps) => {
    const [inputVehicleNumber, setInputVehicleNumber] = useState('')
    const [searchableDates, setSearchableDates] = useState({ firstDateAt: '', lastDateAt: '' })
    const [startDate, setStartDate] = useState<DateTime>({ year: '', month: '', date: '', hour: '', minute: '' })
    const [endDate, setEndDate] = useState<DateTime>({ year: '', month: '', date: '', hour: '', minute: '' })

    const { searchVehicle, vehicleData, isOpen, modalMessage, closeModal } = useSearchVehicle(inputVehicleNumber)

    const { isAllSelected, isWithSearchableRange, isValidSelectRange, validate } = validateDateRange(
        startDate,
        endDate,
        searchableDates,
    )

    useEffect(() => {
        if (vehicleData?.searchableDate) {
            setSearchableDates(vehicleData.searchableDate)
        }
    }, [vehicleData])

    const handleButtonClick = () => {
        if (!isWithSearchableRange()) {
            alert(`조회 가능한 일은 ${searchableDates.firstDateAt} ~ ${searchableDates.lastDateAt}`)
            return
        }

        if (!isValidSelectRange()) {
            alert('종료 일시는 시작 일시보다 같거나 빠르면 안됩니다')
            return
        }

        if (validate()) {
            getVehicleRoutes()
        }
    }

    const getVehicleRoutes = async () => {
        // const data = await vehicleAPI.fetchVehicleRoutesData()
        const data = mockRoutesData.result.routes.map((route) => ({
            lat: route.lat,
            lng: route.lon,
        }))

        onPathsChange(data)
        onMapLocationChange(paths[paths.length / 2], 10)
    }

    const isButtonDisabled = Boolean(vehicleData)

    return (
        <div className={styles.container}>
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
                <>
                    <h3 className={styles.sectionTitle}>기간 검색</h3>
                    {searchableDates.firstDateAt && searchableDates.lastDateAt && (
                        <p className={styles.searchableDate}>
                            <span className={styles.searchableDateSpan}>[조회 가능 기간]</span>
                            {`${formatISODateToKorean(searchableDates.firstDateAt)} ~ 
                                ${formatISODateToKorean(searchableDates.lastDateAt)}
                            `}
                        </p>
                    )}
                </>
                <DateTimeSelect
                    label='시작 일시'
                    disabled={!isButtonDisabled}
                    value={startDate}
                    onChange={setStartDate}
                />
                <DateTimeSelect label='종료 일시' disabled={!isButtonDisabled} value={endDate} onChange={setEndDate} />
            </div>
            <SquareButton disabled={!isButtonDisabled || !isAllSelected()} onClick={handleButtonClick}>
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
