'use client'

import Image from 'next/image'

import { getFormattedVehicleDetail } from '@/app/(main)/location/utils/format'
import Badge from '@/components/common/Badge'
import SquareButton from '@/components/common/Button/SquareButton'
import { VehicleDetail } from '@/types/vehicle'

import * as styles from './styles.css'

interface VehicleDetailCardProps {
    vehicleDetails: VehicleDetail
    onClose: () => void
}

const VehicleDetailCard = ({ vehicleDetails, onClose }: VehicleDetailCardProps) => {
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
    } = getFormattedVehicleDetail(vehicleDetails)

    return (
        <article className={styles.container}>
            <header className={styles.header}>
                <Badge shape='circle' variant={isDriving ? '운행중' : '미운행'} />
                <h2 className={styles.vehicleNumber}>{vehicleNumber}</h2>
                <button onClick={onClose} aria-label='차량 상세 정보 닫기'>
                    <Image src={'/icons/clear-icon.svg'} width={36} height={36} alt='닫기 버튼' />
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

            <SquareButton>현재 경로보기</SquareButton>
        </article>
    )
}

export default VehicleDetailCard
