'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import Badge from '@/components/common/Badge'
import SquareButton from '@/components/common/Button/SquareButton'
import { formatISODateToDot } from '@/lib/utils/date'
import { convertCoordsToAddress } from '@/lib/utils/map'
import { vehicleDetailsModel } from '@/types/vehicle'

import * as styles from './styles.css'

interface VehicleDetailsCardProps {
    vehicleDetails: vehicleDetailsModel
    onCloseButtonClick: (showDetailsCard: boolean) => void
}

const VehicleDetailsCard = ({ vehicleDetails, onCloseButtonClick }: VehicleDetailsCardProps) => {
    const [address, setAddress] = useState('')

    const {
        department,
        vehicleNumber,
        driverName,
        status: { type, speed, lastEngineOn, lastEngineOff },
        dailyStatus: { distance, drivingTime },
        location: { lat, lng, lastUpdated },
    } = vehicleDetails

    useEffect(() => {
        const getAddressFromCoords = async () => {
            const address = await convertCoordsToAddress(lat, lng)
            setAddress(address)
        }
        getAddressFromCoords()
    }, [lat, lng])

    const isDriving = type === 'ON'

    return (
        <article className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <Badge shape='rectangle' variant={isDriving ? '운행중' : '미운행'} />
                    <h2 className={styles.vehicleNumber}>{vehicleNumber}</h2>
                </div>
                <button onClick={() => onCloseButtonClick(false)} aria-label='차량 상세 정보 닫기'>
                    <Image src={'/icons/clear-icon.svg'} width={32} height={32} alt='닫기 버튼' />
                </button>
            </header>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                {department}
                            </th>
                            <td className={styles.tableCell}>04/09 조직</td>
                            <th scope='row' className={styles.tableHeader}>
                                {driverName}
                            </th>
                            <td className={styles.tableCell}>테스트</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                운행상태
                            </th>
                            <td className={styles.tableCell}>{isDriving ? '운행중' : '미운행'}</td>
                            <th scope='row' className={styles.tableHeader}>
                                속도
                            </th>
                            <td className={styles.tableCell}>{speed} km/h</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                최근시동 ON
                            </th>
                            <td className={styles.tableCell}>{formatISODateToDot(lastEngineOn)}</td>
                            <th scope='row' className={styles.tableHeader}>
                                최근시동 OFF
                            </th>
                            <td className={styles.tableCell}>{formatISODateToDot(lastEngineOff)}</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                당일주행시간
                            </th>
                            <td className={styles.tableCell}>{drivingTime}분</td>
                            <th scope='row' className={styles.tableHeader}>
                                당일주행거리
                            </th>
                            <td className={styles.tableCell}>{distance} km</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                최종수신
                            </th>
                            <td colSpan={3} className={styles.tableCell}>
                                {formatISODateToDot(lastUpdated)}
                            </td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                최종위치
                            </th>
                            <td colSpan={3} className={styles.tableCell}>
                                {/* 대구광역시 동구 효목동 209 */}
                                {address}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <SquareButton>경로보기</SquareButton>
        </article>
    )
}

export default VehicleDetailsCard
