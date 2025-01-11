'use client'

import ListHeader from '@/components/domain/vehicle/ListHeader'
import SearchField from '@/components/domain/vehicle/SearchField'
import { ListItemModel } from '@/types/history'

import ListItem from './components/ListItem/index'
import * as styles from './styles.css'

const HistoryPage = () => {
    // TODO 실제 데이터로 변경하기
    const mockHistoryData: ListItemModel[] = [
        {
            id: 1,
            vehicleNumber: '123가 4567',
            department: '해외영업1팀',
            name: '김알린',
            drivingDays: 15,
            averageDrivingDistance: 150,
            averageDrivingTime: 480,
            totalDrivingDistance: 2250,
            drivingRate: '85',
        },
        {
            id: 2,
            vehicleNumber: '456나 7890',
            department: '국내영업2팀',
            name: '이택배',
            drivingDays: 12,
            averageDrivingDistance: 180,
            averageDrivingTime: 420,
            totalDrivingDistance: 2160,
            drivingRate: '78',
        },
        {
            id: 3,
            vehicleNumber: '789다 1234',
            department: '해외영업2팀',
            name: '박배송',
            drivingDays: 18,
            averageDrivingDistance: 165,
            averageDrivingTime: 510,
            totalDrivingDistance: 2970,
            drivingRate: '92',
        },
        {
            id: 4,
            vehicleNumber: '321라 5678',
            department: '국내영업1팀',
            name: '최드라',
            drivingDays: 14,
            averageDrivingDistance: 145,
            averageDrivingTime: 450,
            totalDrivingDistance: 2030,
            drivingRate: '75',
        },
        {
            id: 5,
            vehicleNumber: '654마 9012',
            department: '해외영업3팀',
            name: '정기사',
            drivingDays: 16,
            averageDrivingDistance: 175,
            averageDrivingTime: 495,
            totalDrivingDistance: 2800,
            drivingRate: '88',
        },
        {
            id: 6,
            vehicleNumber: '987바 3456',
            department: '국내영업3팀',
            name: '강운전',
            drivingDays: 13,
            averageDrivingDistance: 155,
            averageDrivingTime: 435,
            totalDrivingDistance: 2015,
            drivingRate: '82',
        },
        {
            id: 7,
            vehicleNumber: '147사 7890',
            department: '해외영업1팀',
            name: '조안전',
            drivingDays: 17,
            averageDrivingDistance: 185,
            averageDrivingTime: 525,
            totalDrivingDistance: 3145,
            drivingRate: '95',
        },
        {
            id: 8,
            vehicleNumber: '258아 1234',
            department: '국내영업2팀',
            name: '윤차량',
            drivingDays: 11,
            averageDrivingDistance: 135,
            averageDrivingTime: 390,
            totalDrivingDistance: 1485,
            drivingRate: '70',
        },
        {
            id: 9,
            vehicleNumber: '369자 5678',
            department: '해외영업2팀',
            name: '한주행',
            drivingDays: 19,
            averageDrivingDistance: 195,
            averageDrivingTime: 540,
            totalDrivingDistance: 3705,
            drivingRate: '98',
        },
        {
            id: 10,
            vehicleNumber: '159차 9012',
            department: '국내영업3팀',
            name: '황배달',
            drivingDays: 15,
            averageDrivingDistance: 160,
            averageDrivingTime: 465,
            totalDrivingDistance: 2400,
            drivingRate: '86',
        },
    ]

    const headerTitles = [
        '차량번호',
        '부서명',
        '이름',
        '운행일수',
        '평균운행거리',
        '평균운행시간',
        '총운행거리',
        '운행률',
    ]
    return (
        <div>
            <SearchField hasButton={false} />
            <div className={styles.listWrapper}>
                <ListHeader headerTitles={headerTitles} />
                {mockHistoryData.map((history) => (
                    <ListItem key={history.id} data={history} />
                ))}
            </div>
            {/* TODO 페이지네이션 추가 */}
        </div>
    )
}

export default HistoryPage
