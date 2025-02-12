'use client'

import { useSearchParams } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'

import DateRangeSection from '@/app/(main)/route/components/DateRangeSection'
import RouteSearchButton from '@/app/(main)/route/components/RouteSearchButton'
import VehicleSearchSection from '@/app/(main)/route/components/VehicleSearchSection/indext'
import Accordion from '@/components/common/Accordion'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { useModal } from '@/hooks/useModal'
import { useVehicleSearch } from '@/hooks/useVehicleSearch'
import { hasValidDateRange } from '@/lib/utils/validation'
import { LatLng, MapRefType } from '@/types/map'

import * as styles from './styles.css'

interface RouteSearchSectionProps {
    mapRef: MapRefType
    onRoutesChange: (paths: LatLng[]) => void
}

const RouteSearchSection = ({ mapRef, onRoutesChange }: RouteSearchSectionProps) => {
    const [inputValue, setInputValue] = useState('')
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null])
    const [vehicleId, setVehicleId] = useState<string | undefined>()

    const { searchableDates, searchVehicle } = useVehicleSearch()

    const { isModalOpen, message, closeModal, openModalWithMessage } = useModal()

    const searchParams = useSearchParams()

    useEffect(() => {
        const vehicleId = searchParams.get('vehicleId')
        const vehicleNumber = searchParams.get('vehicleNumber')
        const startDate = searchParams.get('startDate')
        const endDate = searchParams.get('endDate')

        if (vehicleId && vehicleNumber) {
            setInputValue(vehicleNumber)
            setVehicleId(vehicleId)
        } else return

        if (startDate && endDate) setDateRange([new Date(startDate), new Date(endDate)])
    }, [searchParams])

    const showBottomSection = searchParams.get('vehicleNumber')
    const isVehicleNumberDirty = searchParams.get('vehicleNumber') !== inputValue
    const isRouteSearchable = !!searchParams.get('vehicleNumber') && hasValidDateRange(dateRange)
    const isButtonDisabled = isVehicleNumberDirty || !isRouteSearchable

    return (
        <div className={styles.accordion}>
            <Accordion title='차량 및 기간 검색'>
                <div className={styles.container} aria-label='경로 조회 판넬'>
                    <VehicleSearchSection
                        value={inputValue}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
                        searchVehicle={searchVehicle}
                        onError={openModalWithMessage}
                        onDatesClean={() => setDateRange([null, null])}
                    />

                    {showBottomSection && (
                        <div className={styles.bottomSection}>
                            <DateRangeSection
                                searchableDates={searchableDates}
                                value={dateRange}
                                onChange={setDateRange}
                            />

                            <RouteSearchButton
                                mapRef={mapRef}
                                vehicleId={vehicleId}
                                dateRange={dateRange}
                                disabled={isButtonDisabled}
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
