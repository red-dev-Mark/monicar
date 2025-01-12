'use client'

import { ChangeEvent, useState } from 'react'

import DateTimeSelect from '@/app/(dashboard)/route/components/RouteSearchPanel/DateTimeSelect'
import { DateTime } from '@/app/(dashboard)/route/types/date'
import SquareButton from '@/components/common/Button/SquareButton'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { INITIAL_MAP_STATE, ZOOM_LEVEL } from '@/constants/map'
import { useSearchVehicle } from '@/hooks/useSearchVehicle'
import { vehicleAPI } from '@/lib/apis'
import { formatISODateToKorean } from '@/lib/utils/date'
import { validateDateSelection } from '@/lib/utils/validation'
import { LatLng } from '@/types/location'

import * as styles from './styles.css'

interface RouteSearchPanelProps {
    onPathsChange: (paths: LatLng[]) => void
    onMapLocationChange: (location: LatLng, level: (typeof ZOOM_LEVEL)[keyof typeof ZOOM_LEVEL]) => void
}

const RouteSearchPanel = ({ onPathsChange, onMapLocationChange }: RouteSearchPanelProps) => {
    const [inputValue, setInputValue] = useState('')
    const [startDate, setStartDate] = useState<DateTime>({ year: '', month: '', date: '', hour: '', minute: '' })
    const [endDate, setEndDate] = useState<DateTime>({ year: '', month: '', date: '', hour: '', minute: '' })

    const { searchedVehicle, searchableDates, isOpen, modalMessage, searchVehicle, closeModal } =
        useSearchVehicle(inputValue)

    const { isValidDate, isAllSelected, isWithSearchableRange, isValidSelectRange } = validateDateSelection(
        startDate,
        endDate,
        searchableDates,
    )

    const isSelectable = !!searchableDates.firstDateAt && !!searchableDates.lastDateAt

    const handleSubmit = async () => {
        if (!isValidDate()) {
            alert('선택하신 날짜가 유효하지 않습니다')
            return
        }

        if (!isWithSearchableRange()) {
            alert(`조회 가능한 일은 ${searchableDates.firstDateAt} ~ ${searchableDates.lastDateAt}`)
            return
        }

        if (!isValidSelectRange()) {
            alert('종료 일시는 시작 일시보다 같거나 빠르면 안됩니다')
            return
        }

        if (!(searchedVehicle && startDate && endDate)) {
            return
        }

        const routesData = await vehicleAPI.fetchVehicleRoutesData(searchedVehicle.vehicleId, startDate, endDate)
        const paths = routesData.result.routes.map((route) => ({
            lat: route.lat,
            lng: route.lon,
        }))

        onPathsChange(paths)
        onMapLocationChange(INITIAL_MAP_STATE.center, 12)
    }

    return (
        <aside className={styles.container}>
            <div className={styles.searchSection}>
                <h3 className={styles.sectionTitle}>차량 검색</h3>
                <SearchInput
                    value={inputValue}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
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
                    {isSelectable && (
                        <p className={styles.searchableDate}>
                            <span className={styles.searchableDateSpan}>[조회 가능 기간]</span>
                            {`${formatISODateToKorean(searchableDates.firstDateAt)} ~ 
                                ${formatISODateToKorean(searchableDates.lastDateAt)}
                            `}
                        </p>
                    )}
                </>
                <DateTimeSelect label='시작 일시' disabled={!isSelectable} value={startDate} onChange={setStartDate} />
                <DateTimeSelect label='종료 일시' disabled={!isSelectable} value={endDate} onChange={setEndDate} />
            </div>

            <SquareButton disabled={!isAllSelected()} onClick={handleSubmit}>
                조회하기
            </SquareButton>

            <Modal
                isOpen={isOpen}
                message={modalMessage as ModalMessageType}
                variant={{ variant: 'alert', confirmButton: '확인' }}
                onClose={closeModal}
            />
        </aside>
    )
}

export default RouteSearchPanel
