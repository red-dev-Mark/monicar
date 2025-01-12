'use client'

import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'

import DateTimeSelect from '@/app/(dashboard)/route/components/RouteSearchPanel/DateTimeSelect'
import { DateTime } from '@/app/(dashboard)/route/types/date'
import SquareButton from '@/components/common/Button/SquareButton'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { useModal } from '@/hooks/useModal'
import { useSearchVehicle } from '@/hooks/useSearchVehicle'
import { formatISODateToKorean } from '@/lib/utils/date'
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
    const [isSelectAllDate, setIsSelectAllDate] = useState(false)
    const [startDate, setStartDate] = useState<DateTime>({ year: '', month: '', date: '', hour: '', minute: '' })
    const [endDate, setEndDate] = useState<DateTime>({ year: '', month: '', date: '', hour: '', minute: '' })

    const { searchVehicle, vehicleData, isOpen, modalMessage, closeModal } = useSearchVehicle(inputVehicleNumber)
    const { showMessage } = useModal()

    useEffect(() => {
        if (vehicleData?.searchableDate) {
            setSearchableDates(vehicleData.searchableDate)
        }
    }, [vehicleData])

    useEffect(() => {
        const { year: startYear, month: startMonth, date: startDay, hour: startHour, minute: startMinute } = startDate
        const { year: endYear, month: endMonth, date: endDay, hour: endHour, minute: endMinute } = endDate

        if (
            startYear &&
            startMonth &&
            startDay &&
            startHour &&
            startMinute &&
            endYear &&
            endMonth &&
            endDay &&
            endHour &&
            endMinute
        ) {
            setIsSelectAllDate(true)
        }
    }, [startDate, endDate])

    const handleButtonClick = () => {
        const isSearchableStartDate =
            new Date(
                `${startDate.year}-${startDate.month}-${startDate.date}T${startDate.hour}:${startDate.minute}:00`,
            ).getTime() >= new Date(searchableDates.firstDateAt).getTime()

        const isSearchableEndDate =
            new Date(
                `${endDate.year}-${endDate.month}-${endDate.date}T${endDate.hour}:${endDate.minute}:00`,
            ).getTime() <= new Date(searchableDates.lastDateAt).getTime()

        const formattedStartDate = new Date(
            `${startDate.year}-${startDate.month}-${startDate.date}T${startDate.hour}:${startDate.minute}:00`,
        ).getTime()
        const formattedEndDate = new Date(
            `${endDate.year}-${endDate.month}-${endDate.date}T${endDate.hour}:${endDate.minute}:00`,
        ).getTime()

        if (formattedStartDate >= formattedEndDate) {
            showMessage('종료 일시는 시작 일시보다 같거나 빠르면 안됩니다')
            alert('종료 일시는 시작 일시보다 같거나 빠르면 안됩니다')
        } else if (!isSearchableStartDate || !isSearchableEndDate) {
            alert(`조회 가능한 일은 ${searchableDates.firstDateAt} ~ ${searchableDates.lastDateAt}`)
        }

        if (isSearchableStartDate && isSearchableEndDate) {
            getVehicleRoutes()
        }
    }

    const getVehicleRoutes = async () => {
        // const data = await vehicleAPI.fetchVehicleRoutesData()
        const data = mockRoutesData.result.routes.map((route) => ({
            lat: route.lat,
            lng: route.lon,
        }))

        const bounds = new kakao.maps.LatLngBounds()

        paths.forEach((path) => {
            bounds.extend(new kakao.maps.LatLng(path.lat, path.lng))
        })

        onPathsChange(data)
        onMapLocationChange(paths[paths.length / 2], 10)
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
                    date={startDate}
                    setDate={setStartDate}
                />
                <DateTimeSelect label='종료 일시' disabled={!isButtonDisabled} date={endDate} setDate={setEndDate} />
            </div>
            <SquareButton disabled={!isButtonDisabled || !isSelectAllDate} onClick={handleButtonClick}>
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
