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
import { hasValidDateRange } from '@/lib/utils/validation'
import { LatLng, MapRefType } from '@/types/map'

import * as styles from './styles.css'
interface RouteSearchSectionProps {
    mapRef: MapRefType
    onRoutesChange: (paths: LatLng[]) => void
}

const RouteSearchSection = ({ mapRef, onRoutesChange }: RouteSearchSectionProps) => {
    const [inputValue, setInputValue] = useState('')
    const { isModalOpen, message, closeModal, openModalWithMessage } = useModal()

    const searchParams = useSearchParams()

    const vehicleNumber = searchParams.get('vehicleNumber')
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    const dateRange: DatesRangeValue = [startDate ? new Date(startDate) : null, endDate ? new Date(endDate) : null]

    useEffect(() => {
        setInputValue(vehicleNumber ? vehicleNumber : '')
    }, [vehicleNumber])

    const isVehicleNumberDirty = searchParams.get('vehicleNumber') !== inputValue
    const isRouteSearchable = !!searchParams.get('vehicleNumber') && hasValidDateRange(dateRange)
    const buttonDisabledCondition = { isVehicleNumberDirty, isRouteSearchable }

    return (
        <div className={styles.accordion}>
            <Accordion title='ㅤ'>
                <div className={styles.container} aria-label='경로 조회 판넬'>
                    <VehicleSearchSection
                        value={inputValue}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
                        onError={openModalWithMessage}
                    />

                    {vehicleNumber && (
                        <div className={styles.bottomSection}>
                            <DateRangeSection onError={openModalWithMessage} />
                            <RouteSearchButton
                                mapRef={mapRef}
                                disabled={buttonDisabledCondition}
                                onRoutesChange={onRoutesChange}
                                onError={openModalWithMessage}
                            />
                        </div>
                    )}
                </div>
            </Accordion>

            <Modal
                isOpen={isModalOpen}
                message={message as ModalMessageType}
                variant={{ variant: 'alert', confirmButton: '확인' }}
                onClose={closeModal}
            />
        </div>
    )
}

export default RouteSearchSection
