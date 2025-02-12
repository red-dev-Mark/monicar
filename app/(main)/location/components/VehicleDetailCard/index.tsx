'use client'

import { Tooltip } from '@mantine/core'
import Image from 'next/image'

import { getFormattedVehicleDetail } from '@/app/(main)/location/utils/format'
import Badge from '@/components/common/Badge'
import SquareButton from '@/components/common/Button/SquareButton'
import { useVehicleDisclosure } from '@/hooks/useVehicleDisclosure'
import { useVehicleVisibleStore } from '@/stores/useVehicleVisibleStore'
import { vars } from '@/styles/theme.css'
import { VehicleDetail } from '@/types/vehicle'

import * as styles from './styles.css'

interface VehicleDetailCardProps {
    vehicleDetail: VehicleDetail
    onClose?: () => void
}

const VehicleDetailCard = ({ vehicleDetail, onClose }: VehicleDetailCardProps) => {
    const { hideSearchedVehicle } = useVehicleDisclosure()
    const setInputValue = useVehicleVisibleStore((state) => state.setInputValue)

    const resetSearchedVehicle = () => {
        hideSearchedVehicle()
        setInputValue('')
    }

    const {
        isDriving,
        vehicleNumber,
        speed,
        lastEngineOn,
        lastEngineOff,
        todayDrivingTime,
        todayDrivingDistance,
        lastUpdated,
        lastAddress,
    } = getFormattedVehicleDetail(vehicleDetail)

    return (
        <article className={styles.container}>
            <header className={styles.header}>
                <Badge shape='circle' variant={isDriving ? '운행중' : '미운행'} />
                <h2 className={styles.vehicleNumber}>{vehicleNumber}</h2>
                <button
                    className={styles.closeButton}
                    onClick={onClose || resetSearchedVehicle}
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
                            <td className={styles.tableCell}>{speed} km/h</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                최근시동 ON
                            </th>
                            <td className={styles.tableCell}>{lastEngineOn}</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                최근시동 OFF
                            </th>
                            <td className={styles.tableCell}>{lastEngineOff}</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                당일주행시간
                            </th>
                            <td className={styles.tableCell}>{todayDrivingTime}</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                당일주행거리
                            </th>
                            <td className={styles.tableCell}>{todayDrivingDistance} km</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                최종수신
                            </th>
                            <td className={styles.tableCell}>{lastUpdated}</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                최종위치
                            </th>
                            <td className={styles.tableCell}>{lastAddress}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {!isDriving ? (
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
                <SquareButton>실시간 경로보기</SquareButton>
            )}
        </article>
    )
}

export default VehicleDetailCard
