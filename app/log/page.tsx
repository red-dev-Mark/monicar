'use client'

import ListHeader from '@/components/domain/vehicle/ListHeader'
import SearchField from '@/components/domain/vehicle/SearchField'
import { ListItemModel } from '@/types/log'

import ListItem from './components/ListItem/index'
import * as styles from './styles.css'

const LogPage = () => {
    // TODO 실제 데이터로 변경하기
    const mockLogData: ListItemModel[] = [
        { id: 1, vehicleNumber: '123가 4567', vehicleModel: '미니쿠퍼', status: '운행중' },
        { id: 2, vehicleNumber: '456나 7890', vehicleModel: '현대', status: '미운행' },
        { id: 3, vehicleNumber: '789다 1234', vehicleModel: '기아', status: '미관제' },
        { id: 4, vehicleNumber: '321라 5678', vehicleModel: '토요타', status: '운행중' },
        { id: 5, vehicleNumber: '654마 9012', vehicleModel: '벤츠', status: '미운행' },
        { id: 6, vehicleNumber: '987바 3456', vehicleModel: '테슬라', status: '미운행' },
        { id: 7, vehicleNumber: '147사 7890', vehicleModel: '아우디', status: '운행중' },
        { id: 8, vehicleNumber: '258아 1234', vehicleModel: '포르쉐', status: '운행중' },
        { id: 9, vehicleNumber: '369자 5678', vehicleModel: '볼보', status: '운행중' },
        { id: 10, vehicleNumber: '159차 9012', vehicleModel: '폭스바겐', status: '운행중' },
    ]

    const headerTitles = ['차량번호', '차종', '차량현황']

    return (
        <>
            <SearchField hasButton={true} />
            <div className={styles.listWrapper}>
                <ListHeader headerTitles={headerTitles} />

                {mockLogData.map((log) => (
                    <ListItem key={log.id} data={log} />
                ))}
            </div>

            {/* TODO 페이지네이션 추가 */}
        </>
    )
}

export default LogPage
