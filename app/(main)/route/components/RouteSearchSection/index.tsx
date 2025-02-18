'use client'

import { Switch, Tooltip } from '@mantine/core'
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
// import { vehicleService } from '@/lib/apis'
import { hasValidDateRange } from '@/lib/utils/validation'
import { vars } from '@/styles/theme.css'
import { LatLng, MapRefType } from '@/types/map'

import * as styles from './styles.css'
interface RouteSearchSectionProps {
    mapRef: MapRefType
    onRoutesChange: (paths: LatLng[]) => void
}

const RouteSearchSection = ({ mapRef, onRoutesChange }: RouteSearchSectionProps) => {
    const [inputValue, setInputValue] = useState('')
    const { isModalOpen, message, closeModal, openModalWithMessage } = useModal()
    // const [operationPeriod, setOperationPeriod] = useState<VehicleOperationPeriod | null>(null)
    // const [isOperation, setIsOperation] = useState(false)

    const searchParams = useSearchParams()

    // const vehicleId = searchParams.get('vehicleId')
    const vehicleNumber = searchParams.get('vehicleNumber')
    // const live = searchParams.get('live') === 'true'
    // const firstOperationDate = searchParams.get('firstOperationDate')
    // const lastOperationDate = searchParams.get('lastOperationDate')
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    const dateRange: DatesRangeValue = [startDate ? new Date(startDate) : null, endDate ? new Date(endDate) : null]
    // const searchableDateRange: VehicleOperationPeriod = { firstOperationDate, lastOperationDate }

    useEffect(() => {
        if (!vehicleNumber) {
            setInputValue('')
            return
        }

        setInputValue(vehicleNumber)
    }, [vehicleNumber])

    // useEffect(() => {
    //     if (!vehicleId && !live) return

    //     const checkIsOperationStatus = async () => {
    //         try {
    //             const response = await vehicleService.getVehicleOperationStatus(vehicleId || '')
    //             setIsOperation(response.result)

    //             if (!response.result) {
    //                 removeQuery('live')
    //             }
    //         } catch (error) {
    //             console.error('운행 상태 조회 실패', error)
    //             setIsOperation(false)
    //         }
    //     }

    //     checkIsOperationStatus()
    // }, [searchParams])

    // const handleLiveToggle = () => {
    //     if (live) {
    //         removeQuery('live')
    //     } else {
    //         clearAllQueries()
    //         addQueries({
    //             live: 'true',
    //             vehicleId: vehicleId || '',
    //             vehicleNumber: vehicleNumber || '',
    //         })
    //     }
    // }

    const isVehicleNumberDirty = searchParams.get('vehicleNumber') !== inputValue
    const isRouteSearchable = !!searchParams.get('vehicleNumber') && hasValidDateRange(dateRange)
    const buttonDisabledCondition = { isVehicleNumberDirty, isRouteSearchable }

    return (
        <div className={styles.accordion}>
            <Accordion title='차량 및 기간 검색'>
                <div className={styles.container} aria-label='경로 조회 판넬'>
                    <VehicleSearchSection
                        // setOperationPeriod={setOperationPeriod}
                        value={inputValue}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
                        onError={openModalWithMessage}
                    />

                    {vehicleNumber && (
                        <div className={styles.bottomSection}>
                            <DateRangeSection
                            // searchableDateRange={searchableDateRange}
                            // value={dateRange}
                            // onChange={handleDateChange}
                            />
                            <Tooltip
                                label='현재 미운행 차량입니다'
                                // disabled={isOperation}
                                color={vars.colors.gray[800]}
                                arrowSize={6}
                                arrowOffset={120}
                                withArrow
                                arrowPosition='side'
                                offset={{ mainAxis: 10, crossAxis: 180 }}
                            >
                                <div className={styles.swtich}>
                                    실시간 경로 조회
                                    <Switch
                                        // disabled={isOperation}
                                        // defaultChecked={isOperation && live}
                                        // onChange={handleLiveToggle}
                                        size='lg'
                                        color={`${vars.colors.primary}`}
                                    />
                                </div>
                            </Tooltip>

                            <RouteSearchButton
                                mapRef={mapRef}
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
