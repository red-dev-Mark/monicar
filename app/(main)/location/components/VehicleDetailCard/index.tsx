'use client'

import { Skeleton, Tooltip } from '@mantine/core'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import Badge from '@/components/common/Badge'
import SquareButton from '@/components/common/Button/SquareButton'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { MAP_CONFIG } from '@/constants/map'
import { useCoordToAddress } from '@/hooks/useCoordToAddress'
import { useLoading } from '@/hooks/useLoading'
import { useMapStatus } from '@/hooks/useMapStatus'
import { useModal } from '@/hooks/useModal'
import { useQueryParams } from '@/hooks/useQueryParams'
import { vehicleService } from '@/lib/apis'
import { isWithinZoomThreshold } from '@/lib/utils/map'
import { normalizeCoordinate } from '@/lib/utils/normalize'
import { getFormattedVehicleDetail } from '@/lib/utils/vehicle'
import { vars } from '@/styles/theme.css'
import { MapRefType } from '@/types/map'
import { VehicleDetail } from '@/types/vehicle'

import * as styles from './styles.css'

interface VehicleDetailCardProps {
    mapRef: MapRefType
}
const VehicleDetailCard = ({ mapRef }: VehicleDetailCardProps) => {
    const [vehicleDetail, setVehicleDetail] = useState<VehicleDetail>()

    const { mapState, controlMapStatus } = useMapStatus(mapRef.current)
    const { clearAllQueries } = useQueryParams()
    const [isLoading, startLoading, finishLoading] = useLoading()
    const { isModalOpen, message, closeModal, openModalWithMessage } = useModal()

    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        const vehicleNumber = searchParams.get('vehicleNumber')
        if (!vehicleNumber) {
            setVehicleDetail(undefined)
            return
        }

        const initializeVehicleDetail = async () => {
            if (!mapRef.current) return

            try {
                startLoading()
                const vehicleLocation = await vehicleService.getVehicleInfo(vehicleNumber)
                if (!vehicleLocation.data) throw new Error(vehicleLocation.error || '알 수 없는 오류가 발생했습니다')

                const { vehicleId } = vehicleLocation.data

                const result = await vehicleService.getVehicleDetail(vehicleId)
                if (!result.data) throw new Error(vehicleLocation.error || '알 수 없는 오류가 발생했습니다')

                setVehicleDetail(result.data)
                const {
                    recentCycleInfo: { lat, lng },
                } = result.data

                const coordinate = {
                    lat: normalizeCoordinate(lat),
                    lng: normalizeCoordinate(lng),
                }
                controlMapStatus(
                    coordinate,
                    isWithinZoomThreshold(mapState) ? mapState.level : MAP_CONFIG.CLUSTER.VISIBLE_LEVEL,
                )
            } catch (error) {
                if (error instanceof Error) {
                    openModalWithMessage?.(error.message)
                }
            } finally {
                finishLoading()
            }
        }

        initializeVehicleDetail()
    }, [searchParams, mapRef.current])

    const normalizedCoordinate = {
        lat: normalizeCoordinate(vehicleDetail?.recentCycleInfo?.lat || 0),
        lng: normalizeCoordinate(vehicleDetail?.recentCycleInfo?.lng || 0),
    }

    const lastAddress =
        useCoordToAddress(normalizedCoordinate.lat, normalizedCoordinate.lng, openModalWithMessage) || '-'

    if (!vehicleDetail) return

    const {
        isDriving,
        vehicleNumber,
        speed,
        lastEngineOn,
        lastEngineOff,
        todayDrivingTime,
        todayDrivingDistance,
        lastUpdated,
    } = getFormattedVehicleDetail(vehicleDetail)

    const renderWithLoading = (value: React.ReactNode, unit?: string) => {
        if (isLoading) {
            return <Skeleton height={20} width='100%' radius='sm' />
        } else {
            return unit ? `${value} ${unit}` : value
        }
    }

    return (
        <article className={styles.container}>
            <header className={styles.header}>
                {isLoading ? (
                    <>
                        <Skeleton height={36} width='80px' radius='lg' />
                        <Skeleton height={28} width='114px' radius='sm' />
                    </>
                ) : (
                    <>
                        <Badge shape='circle' variant={isDriving ? '운행중' : '미운행'} />
                        <h2 className={styles.vehicleNumber}>{vehicleNumber}</h2>
                    </>
                )}
                <button
                    className={styles.closeButton}
                    onClick={() => clearAllQueries()}
                    aria-label='차량 상세 정보 닫기'
                >
                    <Image
                        src={'/icons/clear-icon.svg'}
                        width={36}
                        height={36}
                        alt='닫기 버튼'
                        style={{ width: '36px', height: '36px' }}
                    />
                </button>
            </header>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                속도
                            </th>
                            <td className={styles.tableCell}>{renderWithLoading(speed, 'km')} </td>
                        </tr>
                        <tr className={styles.engineInfo}>
                            <th scope='row' className={styles.tableHeader}>
                                최근시동 ON
                            </th>
                            <td className={styles.tableCell}>{renderWithLoading(lastEngineOn)}</td>
                        </tr>
                        <tr className={styles.engineInfo}>
                            <th scope='row' className={styles.tableHeader}>
                                최근시동 OFF
                            </th>
                            <td className={styles.tableCell}>{renderWithLoading(lastEngineOff)}</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                당일주행시간
                            </th>
                            <td className={styles.tableCell}>{renderWithLoading(todayDrivingTime)}</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                당일주행거리
                            </th>
                            <td className={styles.tableCell}>{renderWithLoading(todayDrivingDistance, 'km')}</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                최종수신
                            </th>
                            <td className={styles.tableCell}>{renderWithLoading(lastUpdated)}</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                최종위치
                            </th>
                            <td className={styles.tableCell}>{renderWithLoading(lastAddress)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {isDriving ? (
                <Tooltip
                    color={vars.colors.gray[800]}
                    arrowSize={6}
                    label='현재 미운행 중인 차량입니다'
                    withArrow
                    position='top'
                >
                    <div>
                        <SquareButton disabled>실시간 경로보기</SquareButton>
                    </div>
                </Tooltip>
            ) : (
                <SquareButton
                    onClick={() => {
                        router.push(`/route?vehicleNumber=${vehicleNumber}`)
                    }}
                >
                    실시간 경로보기
                </SquareButton>
            )}

            <Modal
                isOpen={isModalOpen}
                message={message as ModalMessageType}
                variant={{ variant: 'alert', confirmButton: '확인' }}
                onClose={closeModal}
            />
        </article>
    )
}

export default VehicleDetailCard
