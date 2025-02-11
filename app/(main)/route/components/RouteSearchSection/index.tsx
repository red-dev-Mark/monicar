'use client'

import { Loader } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { ChangeEvent, useState } from 'react'

import Accordion from '@/components/common/Accordion'
import SquareButton from '@/components/common/Button/SquareButton'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { MAP_CONFIG } from '@/constants/map'
import { useDisclosure } from '@/hooks/useDisclosure'
import { useLoading } from '@/hooks/useLoading'
import { useMapStatus } from '@/hooks/useMapStatus'
import { useModal } from '@/hooks/useModal'
import { useQueryParams } from '@/hooks/useQueryParams'
import { useSearchVehicle } from '@/hooks/useSearchVehicle'
import { routeService } from '@/lib/apis'
import { formatISODateToISOString } from '@/lib/utils/date'
import { normalizeCoordinate } from '@/lib/utils/normalize'
import { hasValidDateRange } from '@/lib/utils/validation'
import { CalendarIcon } from '@/public/icons'
import { FONT_FAMILY } from '@/styles/font.css'
import { vars } from '@/styles/theme.css'
import { LatLng, MapRefType } from '@/types/map'
import { Route } from '@/types/route'

import '@mantine/dates/styles.css'

import * as styles from './styles.css'

interface RouteSearchSectionProps {
    mapRef: MapRefType
    onRoutesChange: (paths: LatLng[]) => void
}

const RouteSearchSection = ({ mapRef, onRoutesChange }: RouteSearchSectionProps) => {
    const [inputValue, setInputValue] = useState('')
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null])

    const [isVehicleSearched, { open: showRouteSearchSection, close: hideRouteSearchSection }] = useDisclosure()
    const [isSearchingVehicle, startSearchingVehicle, finishSearchingVehicle] = useLoading()
    const [isSearchingRoute, startSearchingRoute, finishSearchingRoute] = useLoading()

    const { addQueries } = useQueryParams()
    const { controlMapStatus } = useMapStatus(mapRef.current)
    const { searchedVehicle, searchableDates, searchVehicle } = useSearchVehicle(inputValue)
    const { isModalOpen, message, closeModal, openModalWithMessage } = useModal()

    const handleVehicleSearch = async () => {
        try {
            startSearchingVehicle()
            const result = await searchVehicle()
            if (!result.isSuccess && result.error) throw new Error(result.error)
            setDateRange([null, null])
            showRouteSearchSection()
        } catch (error) {
            if (error instanceof Error) {
                openModalWithMessage(error.message)
                hideRouteSearchSection()
            }
        } finally {
            finishSearchingVehicle()
        }
    }

    const handleRouteSearch = async () => {
        if (!searchedVehicle) return

        const { vehicleId } = searchedVehicle

        try {
            startSearchingRoute()
            const result = await routeService.getVehicleRoutesData(vehicleId, dateRange)

            if (!result?.data || !result.isSuccess) throw new Error(result.error || '경로 조회에 실패했습니다')

            const {
                data: { vehicleNumber, routes },
            } = result

            if (routes) {
                const normalizedRoutes = routes.map((route: Route) => ({
                    lat: normalizeCoordinate(route.lat),
                    lng: normalizeCoordinate(route.lng),
                }))

                onRoutesChange(normalizedRoutes)

                if (!normalizedRoutes?.length) throw new Error('해당 기간의 경로 정보가 없습니다')

                controlMapStatus(normalizedRoutes[normalizedRoutes.length - 1], MAP_CONFIG.ROUTE.ZOOM_INCREMENT)

                addQueries({
                    vehicleId,
                    vehicleNumber,
                    startDate: formatISODateToISOString(dateRange[0]).split('T')[0],
                    endDate: formatISODateToISOString(dateRange[0]).split('T')[0],
                    startLat: normalizedRoutes[0].lat,
                    startLng: normalizedRoutes[0].lng,
                    endLat: normalizedRoutes[normalizedRoutes.length - 1].lat,
                    endLng: normalizedRoutes[normalizedRoutes.length - 1].lng,
                })
            }
        } catch (error) {
            if (error instanceof Error) {
                openModalWithMessage(error.message)
            }
        } finally {
            finishSearchingRoute()
        }
    }

    const isButtonDisabled = !(isVehicleSearched && hasValidDateRange(dateRange))

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
                        isLoading={isSearchingVehicle}
                        disabled={isSearchingVehicle}
                    />
                </div>

                {isVehicleSearched && (
                    <div className={styles.searchSection}>
                        <h3 className={styles.sectionTitle}>기간 검색</h3>
                        <DatePickerInput
                            locale='ko'
                            placeholder='경로 기간 선택'
                            value={dateRange}
                            allowSingleDateInRange
                            onChange={setDateRange}
                            valueFormat='YYYY년 MM월 DD일'
                            minDate={new Date(searchableDates.firstDateAt)}
                            maxDate={new Date(searchableDates.lastDateAt)}
                            size='md'
                            color='red'
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
                        <div className={styles.buttonWrapper}>
                            <SquareButton disabled={isButtonDisabled || isSearchingRoute} onClick={handleRouteSearch}>
                                {isSearchingRoute ? <Loader color={vars.colors.white} size='sm' /> : '경로 보기'}
                            </SquareButton>
                        </div>
                    </div>
                )}
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

export default RouteSearchSection
