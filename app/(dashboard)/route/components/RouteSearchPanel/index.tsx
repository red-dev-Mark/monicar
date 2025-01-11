'use client'

import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'

import DateTimeSelect from '@/app/(dashboard)/route/components/RouteSearchPanel/DateTimeSelect'
import SquareButton from '@/components/common/Button/SquareButton'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { useModal } from '@/hooks/useModal'
import { useSearchVehicle } from '@/hooks/useSearchVehicle'
// import { vehicleAPI } from '@/lib/apis'
import { formatISODateToKorean } from '@/lib/utils/date'
import mockRoutesData from '@/mock/vehicle_route_data.json'
import { PathPoint } from '@/types/location'

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
    // setIsSearchable: (searchable: boolean) => void
    // setVehiclePaths: PathPoint[]
    vehiclePaths: PathPoint[]
    setVehiclePaths: Dispatch<SetStateAction<PathPoint[]>>
    setMapStatus: Dispatch<
        SetStateAction<{
            center: {
                lat: number
                lng: number
            }
            level: number
        }>
    >
    // setMapStatus: {
    //     center: {
    //         lat: number
    //         lng: number
    //     }
    //     level: number
    // }
}

const RouteSearchPanel = ({
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    // onButtonClick,
    // setIsSearchable,
    setVehiclePaths,
    setMapStatus,
    vehiclePaths,
}: RouteSearchPanelProps) => {
    const [inputVehicleNumber, setInputVehicleNumber] = useState('')
    const [searchableDates, setSearchableDates] = useState({ firstDateAt: '', lastDateAt: '' })
    const [isSelectAllDate, setIsSelectAllDate] = useState(false)

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
            // setIsSearchable(false)
        }

        if (isSearchableStartDate && isSearchableEndDate) {
            // setIsSearchable(true)
            getVehicleRoutes()
        }
    }

    const getVehicleRoutes = async () => {
        // const data = await vehicleAPI.fetchVehicleRoutesData()
        const data = mockRoutesData.result.routes.map((route) => ({
            id: route.timestamp,
            lat: route.lat,
            lng: route.lon,
        }))

        setVehiclePaths(data)
        setMapStatus({ center: vehiclePaths[vehiclePaths.length / 2], level: 10 })
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
                            <span className={styles.searchableDateSpan}> [조회 가능 기간] </span>
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
