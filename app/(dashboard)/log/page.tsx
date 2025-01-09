'use client'

import { RoundButton } from '@/components/common/Button/RoundButton'
import SearchInput from '@/components/common/Input/SearchInput'
import { RightIcon } from '@/public/icons'
import { VehicleLogModel } from '@/types/log'

import ListHeader from './components/ListHeader/index'
import ListItem from './components/ListItem/index'
import * as styles from './styles.css'

const LogPage = () => {
    // TODO 실제 데이터로 변경하기
    const mockLogData: VehicleLogModel[] = [
        { id: 1, vehicleNumber: '123가 4567', vehicleModel: '미니쿠퍼', status: '운행중', icon: <RightIcon /> },
        { id: 2, vehicleNumber: '456나 7890', vehicleModel: '현대', status: '미운행', icon: <RightIcon /> },
        { id: 3, vehicleNumber: '789다 1234', vehicleModel: '기아', status: '미관제', icon: <RightIcon /> },
        { id: 4, vehicleNumber: '321라 5678', vehicleModel: '토요타', status: '운행중', icon: <RightIcon /> },
        { id: 5, vehicleNumber: '654마 9012', vehicleModel: '벤츠', status: '미운행', icon: <RightIcon /> },
        { id: 6, vehicleNumber: '987바 3456', vehicleModel: '테슬라', status: '미운행', icon: <RightIcon /> },
        { id: 7, vehicleNumber: '147사 7890', vehicleModel: '아우디', status: '운행중', icon: <RightIcon /> },
        { id: 8, vehicleNumber: '258아 1234', vehicleModel: '포르쉐', status: '운행중', icon: <RightIcon /> },
        { id: 9, vehicleNumber: '369자 5678', vehicleModel: '볼보', status: '운행중', icon: <RightIcon /> },
        { id: 10, vehicleNumber: '159차 9012', vehicleModel: '폭스바겐', status: '운행중', icon: <RightIcon /> },
    ]

    return (
        <div>
            <div className={styles.componentsWrapper}>
                <div className={styles.buttonWrapper}>
                    <RoundButton color='secondary' onClick={() => {}} size='small'>
                        등록
                    </RoundButton>
                </div>
                <div className={styles.searchInputWrapper}>
                    <SearchInput icon='/icons/search-icon.svg' />
                </div>
            </div>
            <div className={styles.listWrapper}>
                <ListHeader />
                {mockLogData.map((log) => (
                    <ListItem key={log.id} data={log} />
                ))}
            </div>

            {/* TODO 페이지네이션 추가 */}
        </div>
    )
}

export default LogPage
