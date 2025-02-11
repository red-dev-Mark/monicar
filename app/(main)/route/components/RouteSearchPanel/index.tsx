'use client'

import { DatePickerInput } from '@mantine/dates'
import { ChangeEvent, useEffect, useState } from 'react'

import { DateTime } from '@/app/(main)/route/types/date'
import Accordion from '@/components/common/Accordion'
import SquareButton from '@/components/common/Button/SquareButton'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { MAP_CONFIG } from '@/constants/map'
import { useMapStatus } from '@/hooks/useMapStatus'
import { useModal } from '@/hooks/useModal'
import { useSearchVehicle } from '@/hooks/useSearchVehicle'
import { routeService } from '@/lib/apis'
import { formatISODateToKorean } from '@/lib/utils/date'
import { normalizeCoordinate } from '@/lib/utils/normalize'
import { validateDateSelection } from '@/lib/utils/validation'
import { CalendarIcon } from '@/public/icons'
import { FONT_FAMILY } from '@/styles/font.css'
import { vars } from '@/styles/theme.css'
import { LatLng, MapRefType } from '@/types/map'
import { Route } from '@/types/route'

import '@mantine/dates/styles.css'

import * as styles from './styles.css'

interface RouteSearchPanelProps {
    mapRef: MapRefType
    onRouteChange: (paths: LatLng[]) => void
    // onMapLocationChange: (location: LatLng, level: (typeof ZOOM_LEVEL)[keyof typeof ZOOM_LEVEL]) => void
}

const RouteSearchPanel = ({ mapRef, onRouteChange }: RouteSearchPanelProps) => {
    const [inputValue, setInputValue] = useState('')
    const [startDate, setStartDate] = useState<DateTime>({ year: '', month: '', date: '', hour: '', minute: '' })
    const [endDate, setEndDate] = useState<DateTime>({ year: '', month: '', date: '', hour: '', minute: '' })
    const { isModalOpen, message, closeModal, openModalWithMessage } = useModal()

    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null])

    const { searchedVehicle, searchableDates, searchVehicle, setSearchableDates } = useSearchVehicle(inputValue)

    const { controlMapStatus } = useMapStatus(mapRef.current)

    const handleVehicleSearch = async () => {
        const result = await searchVehicle()

        if (!result.isSuccess && result.error) {
            openModalWithMessage(result.error)
        }
    }

    const asdf = () => {
        setStartDate({ year: '', month: '', date: '', hour: '', minute: '' })
        setEndDate({ year: '', month: '', date: '', hour: '', minute: '' })
    }

    useEffect(() => {
        if (!searchedVehicle) {
            setSearchableDates({ firstDateAt: '', lastDateAt: '' })
        }
    }, [searchedVehicle, setSearchableDates])

    const { isValidDate, isAllSelected, isWithSearchableRange, isValidSelectRange } = validateDateSelection(
        startDate,
        endDate,
        searchableDates,
    )

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

        const vehiclePaths = await routeService.getVehicleRoutesData(searchedVehicle.vehicleId, startDate, endDate)

        const paths = vehiclePaths.routes.map((route: Route) => ({
            lat: normalizeCoordinate(route.lat),
            lng: normalizeCoordinate(route.lng),
        }))

        onRouteChange(paths)
        controlMapStatus({ lat: 37.417117, lng: 126.98816 }, MAP_CONFIG.ROUTE.ZOOM_INCREMENT)
    }

    const isSelectable = !!searchableDates.firstDateAt && !!searchableDates.lastDateAt

    return (
        <Accordion title='차량 및 기간 검색'>
            <aside className={styles.container} aria-label='경로 조회 판넬'>
                <div className={styles.searchSection}>
                    <h3 className={styles.sectionTitle}>차량 검색</h3>
                    <SearchInput
                        value={inputValue}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
                        onSubmit={handleVehicleSearch}
                        placeholder='차량번호 검색'
                        icon='/icons/pink-search-icon.svg'
                        className={styles.searchInputStyle}
                    />
                </div>

                <div className={styles.searchSection}>
                    <h3 className={styles.sectionTitle}>기간 검색</h3>
                    {isSelectable && (
                        <p className={styles.searchableDate}>
                            <span className={styles.searchableDateSpan}>조회 가능 기간</span>
                            {formatISODateToKorean(searchableDates.firstDateAt)}
                            <span style={{ color: vars.colors.gray[400] }}>~</span>
                            {formatISODateToKorean(searchableDates.lastDateAt)}
                        </p>
                    )}
                    <DatePickerInput
                        locale='ko'
                        placeholder='경로 기간 선택'
                        value={dateRange}
                        onChange={setDateRange}
                        valueFormat='YYYY년 MM월 DD일'
                        minDate={new Date('2025-01-02')}
                        maxDate={new Date('2025-01-03')}
                        size='md'
                        type='range'
                        radius='md'
                        styles={{
                            input: {
                                height: '48px',
                                paddingLeft: '16px',
                                fontFamily: FONT_FAMILY.airbnbCereal,
                                color: vars.colors.gray[800],
                                border: `1px solid ${vars.colors.gray[200]}`,
                            },
                        }}
                        rightSection={
                            <div style={{ width: '24px', height: '24px' }}>
                                <CalendarIcon size={16} stroke={1} />
                            </div>
                        }
                        rightSectionPointerEvents='none'
                    />
                </div>

                {/* <SquareButton disabled={!isAllSelected()} onClick={handleSubmit}> */}
                <SquareButton
                    disabled={!isAllSelected()}
                    onClick={() => {
                        handleSubmit()
                        asdf()
                    }}
                >
                    경로 보기
                </SquareButton>
            </aside>

            <Modal
                isOpen={isModalOpen}
                message={message as ModalMessageType}
                variant={{ variant: 'alert', confirmButton: '확인' }}
                onClose={closeModal}
            />
        </Accordion>
    )
}

export default RouteSearchPanel
