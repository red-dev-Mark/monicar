'use client'

import { DatesRangeValue } from '@mantine/dates'
import { useSearchParams } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'

import DateRangeSection from '@/app/(main)/route/components/DateRangeSection'
import RouteSearchButton from '@/app/(main)/route/components/RouteSearchButton'
import VehicleSearchSection from '@/app/(main)/route/components/VehicleSearchSection/indext'
import Accordion from '@/components/common/Accordion'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { useModal } from '@/hooks/useModal'
import { useQueryParams } from '@/hooks/useQueryParams'
import { hasValidDateRange } from '@/lib/utils/validation'
import { LatLng, MapRefType } from '@/types/map'
import { VehicleOperationPeriod } from '@/types/vehicle'

import * as styles from './styles.css'
interface RouteSearchSectionProps {
    mapRef: MapRefType
    onRoutesChange: (paths: LatLng[]) => void
}

const RouteSearchSection = ({ mapRef, onRoutesChange }: RouteSearchSectionProps) => {
    const [inputValue, setInputValue] = useState('')
    // const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null])
    // const [isRouteSearchVisible, { open: openRouteSearch, close: closeRout eSearch }] = useDisclosure()

    const { isModalOpen, message, closeModal, openModalWithMessage } = useModal()

    const searchParams = useSearchParams()
    const { addQueries } = useQueryParams()

    const vehicleNumber = searchParams.get('vehicleNumber')
    const firstOperationDate = searchParams.get('firstOperationDate')
    const lastOperationDate = searchParams.get('lastOperationDate')
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    const dateRange: DatesRangeValue = [startDate ? new Date(startDate) : null, endDate ? new Date(endDate) : null]
    const searchableDateRange: VehicleOperationPeriod = { firstOperationDate, lastOperationDate }

    useEffect(() => {
        if (!vehicleNumber) {
            setInputValue('')
            return
        }

        setInputValue(vehicleNumber)
    }, [vehicleNumber])

    const handleDateChange = (value: DatesRangeValue) => {
        if (value[0]) {
            addQueries({
                startDate: value[0]?.toISOString() || '',
            })
        }

        if (value[0] && value[1]) {
            addQueries({
                endDate: value[1]?.toISOString() || '',
            })
        }
    }

    const isVehicleNumberDirty = searchParams.get('vehicleNumber') !== inputValue
    const isRouteSearchable = !!searchParams.get('vehicleNumber') && hasValidDateRange(dateRange)
    const buttonDisabledCondition = { isVehicleNumberDirty, isRouteSearchable }

    return (
        <div className={styles.accordion}>
            <Accordion title='차량 및 기간 검색'>
                <div className={styles.container} aria-label='경로 조회 판넬'>
                    <VehicleSearchSection
                        value={inputValue}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
                        // searchVehicle={searchVehicle}
                        // openRouteSearch={openRouteSearch}
                        onError={openModalWithMessage}
                        // onDatesClean={() => setDateRange([null, null])}
                    />

                    {/* {isRouteSearchVisible && ( */}
                    {!vehicleNumber && (
                        <div className={styles.bottomSection}>
                            <DateRangeSection
                                searchableDateRange={searchableDateRange}
                                value={dateRange}
                                onChange={handleDateChange}
                            />

                            <RouteSearchButton
                                mapRef={mapRef}
                                // vehicleId={vehicleId || ''}
                                // dateRange={dateRange}
                                disabled={buttonDisabledCondition}
                                onRoutesChange={onRoutesChange}
                                onError={openModalWithMessage}
                            />
                        </div>
                    )}
                </div>

                <Modal
                    isOpen={isModalOpen}
                    message={message as ModalMessageType}
                    variant={{ variant: 'alert', confirmButton: '확인' }}
                    onClose={closeModal}
                />
            </Accordion>
        </div>
    )
}

export default RouteSearchSection
