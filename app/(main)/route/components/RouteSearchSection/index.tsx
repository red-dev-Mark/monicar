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
import { useQueryParams } from '@/hooks/useQueryParams'
import { vehicleService } from '@/lib/apis'
import { getVehicleOperationInfo } from '@/lib/services/vehicle'
import { hasValidDateRange } from '@/lib/utils/validation'
import { vars } from '@/styles/theme.css'
import { LatLng, MapRefType } from '@/types/map'

import * as styles from './styles.css'
interface RouteSearchSectionProps {
    mapRef: MapRefType
    onRoutesChange: (paths: LatLng[]) => void
    startLiveTracking: (vehicleId: string) => void
    stopLiveTracking: () => void
}

const RouteSearchSection = ({
    mapRef,
    onRoutesChange,
    startLiveTracking,
    stopLiveTracking,
}: RouteSearchSectionProps) => {
    const [inputValue, setInputValue] = useState('')
    const [vehicleId, setIsVehicleId] = useState('')
    const [isOperation, setIsOperation] = useState(false)
    const { isModalOpen, message, closeModal, openModalWithMessage } = useModal()

    const searchParams = useSearchParams()

    const { addQuery, updateQueries, removeQuery } = useQueryParams()

    const vehicleNumber = searchParams.get('vehicleNumber')
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    const live = searchParams.get('live') === 'true'
    const dateRange: DatesRangeValue = [startDate ? new Date(startDate) : null, endDate ? new Date(endDate) : null]

    useEffect(() => {
        if (!vehicleNumber) {
            setInputValue('')
            setIsOperation(false)
            return
        }
        setInputValue(vehicleNumber)

        const getVehicleOperationStatus = async () => {
            try {
                const result = await getVehicleOperationInfo(vehicleNumber)
                if (!result.data) throw new Error(result.error || '차량 검색에 실패했습니다')

                const { vehicleId } = result.data
                if (!vehicleId) throw new Error('해당 차량을 찾을 수 없습니다')

                const operationResult = await vehicleService.getVehicleOperationStatus(vehicleId)
                setIsVehicleId(vehicleId)
                setIsOperation(operationResult.result)
            } catch (error) {
                if (error instanceof Error) {
                    openModalWithMessage?.(error.message)
                }
                setIsOperation(false)
            }
        }

        getVehicleOperationStatus()
    }, [vehicleNumber])

    const handleLiveToggle = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.checked) {
            if (!vehicleId) return
            startLiveTracking(vehicleId)
            updateQueries({ vehicleNumber: vehicleNumber || '', live: 'true' }, [
                'endLat',
                'endLng',
                'startDate',
                'endDate',
            ])
        } else {
            stopLiveTracking()
            updateQueries({}, ['live', 'tracking'])
        }
    }

    const handleTrackingToggle = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.checked) {
            addQuery('tracking', 'true')
        } else {
            removeQuery('tracking')
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
                        onError={openModalWithMessage}
                    />

                    {vehicleNumber && (
                        <div className={styles.bottomSection}>
                            <DateRangeSection />
                            <div className={styles.swtich}>
                                실시간 경로 조회
                                {live && (
                                    <Tooltip
                                        label={'차량 위치 자동 추적'}
                                        color={vars.colors.gray[800]}
                                        arrowSize={6}
                                        withArrow
                                        arrowPosition='side'
                                    >
                                        <div>
                                            <Switch
                                                onChange={handleTrackingToggle}
                                                size='lg'
                                                color={`${vars.colors.dark}`}
                                            />
                                        </div>
                                    </Tooltip>
                                )}
                                <Tooltip
                                    label={isOperation ? '실시간 경로 조회를 시작합니다' : '현재 미운행 차량입니다'}
                                    color={vars.colors.gray[800]}
                                    arrowSize={6}
                                    withArrow
                                    arrowPosition='side'
                                >
                                    <div>
                                        <Switch
                                            disabled={!isOperation}
                                            defaultChecked={live}
                                            onChange={handleLiveToggle}
                                            size='lg'
                                            color={`${vars.colors.primary}`}
                                        />
                                    </div>
                                </Tooltip>
                            </div>

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
