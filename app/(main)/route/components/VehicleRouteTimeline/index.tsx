import { Group, Pagination } from '@mantine/core'
import Image from 'next/image'
import { useState } from 'react'

import * as styles from './styles.css'

const VehicleRouteTimeline = () => {
    const [activePage, setActivePage] = useState(1)

    return (
        <div className={styles.container}>
            <div className={styles.tableHeader}>
                <div className={styles.index} />
                <p className={styles.timestamp}>시간</p>
                <p className={styles.vehicleNumber}>차량번호</p>
                <p className={styles.speed}>속도</p>
                <p className={styles.location}>위치</p>
                <button className={styles.closeButton} onClick={() => console.log('eke')}>
                    <Image
                        src={'/icons/clear-icon.svg'}
                        width={36}
                        height={36}
                        alt='닫기 버튼'
                        style={{ width: '36px', height: '36px' }}
                    />
                </button>
            </div>

            <div className={styles.tableList}>
                <div className={styles.tableItem}>
                    <p className={styles.index}>1</p>
                    <p className={styles.timestamp}>2024년 09월 01일 13시 24분 33초</p>
                    <p className={styles.vehicleNumber}>123나 1234</p>
                    <p className={styles.speed}>213km</p>
                    <p className={styles.location}>서울특별시 양천구 목동 6단지</p>
                </div>
                <div className={styles.tableItem}>
                    <p className={styles.index}>2</p>
                    <p className={styles.timestamp}>2024년 09월 01일 13시 24분 33초</p>
                    <p className={styles.vehicleNumber}>123나 1234</p>
                    <p className={styles.speed}>213km</p>
                    <p className={styles.location}>서울특별시 양천구 목동 6단지</p>
                </div>
                <div className={styles.tableItem}>
                    <p className={styles.index}>3</p>
                    <p className={styles.timestamp}>2024년 09월 01일 13시 24분 33초</p>
                    <p className={styles.vehicleNumber}>123나 1234</p>
                    <p className={styles.speed}>213km</p>
                    <p className={styles.location}>서울특별시 양천구 목동 6단지</p>
                </div>
                <div className={styles.tableItem}>
                    <p className={styles.index}>4</p>
                    <p className={styles.timestamp}>2024년 09월 01일 13시 24분 33초</p>
                    <p className={styles.vehicleNumber}>123나 1234</p>
                    <p className={styles.speed}>213km</p>
                    <p className={styles.location}>서울특별시 양천구 목동 6단지</p>
                </div>
                <div className={styles.tableItem}>
                    <p className={styles.index}>5</p>
                    <p className={styles.timestamp}>2024년 09월 01일 13시 24분 33초</p>
                    <p className={styles.vehicleNumber}>123나 1234</p>
                    <p className={styles.speed}>213km</p>
                    <p className={styles.location}>서울특별시 양천구 목동 6단지</p>
                </div>
            </div>

            <div className={styles.pagination}>
                <Pagination.Root
                    // total={logData?.totalPages || 100}
                    total={100}
                    value={activePage}
                    // value={activePage}
                    onChange={setActivePage}
                    // onChange={setActivePage}
                    color='#ff385c'
                    boundaries={0}
                >
                    <Group gap={5} justify='center'>
                        <Pagination.First />
                        <Pagination.Previous />
                        <Pagination.Items />
                        <Pagination.Next />
                        <Pagination.Last />
                    </Group>
                </Pagination.Root>
            </div>
        </div>
    )
}

export default VehicleRouteTimeline
