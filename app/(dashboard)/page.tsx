'use client'

import Calendar from '@/app/(dashboard)/components/Calendar'
import SearchInput from '@/components/common/Input/SearchInput'
import Map from '@/components/domain/map/Map'
import { WhiteAlertIcon, WhiteBellIcon, WhiteCheckIcon, WhiteOnButtonIcon } from '@/public/icons'

import InspectionStatus from './components/InspectionStatus'
import NoticeBoard from './components/NoticeBoard'
import VehicleStatus from './components/VehicleStatus'
import * as styles from './styles.css'

const HomePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <div className={styles.headerWrapper}>
                    <div className={styles.textWrapper}>
                        <span>안녕하세요,</span>
                        <span className={styles.secondLine}>쏘카님👋</span>
                    </div>
                    <div className={styles.searchInputWrapper}>
                        <SearchInput icon={'/icons/search-icon.svg'}></SearchInput>
                    </div>
                </div>
                <div className={styles.inspectionStatusWrapper}>
                    <InspectionStatus
                        inspectionStatusData={[
                            {
                                status: 'required',
                                icon: <WhiteBellIcon color='white' size={24} />,
                                text: '점검 필요',
                                iconType: 'bell',
                            },
                            {
                                status: 'scheduled',
                                icon: <WhiteAlertIcon color='white' size={24} />,
                                text: '점검 예정',
                                iconType: 'alert',
                            },
                            {
                                status: 'inProgress',
                                icon: <WhiteOnButtonIcon color='white' size={24} />,
                                text: '점검 진행',
                                iconType: 'button',
                            },
                            {
                                status: 'completed',
                                icon: <WhiteCheckIcon color='white' size={24} />,
                                text: '점검 완료',
                                iconType: 'check',
                            },
                        ]}
                    />
                </div>
                <div className={styles.vehicleStatusWrapper}>
                    <VehicleStatus
                        vehicleStatusData={[
                            {
                                type: 'total',
                                text: '전체 차량',
                            },
                            {
                                type: 'active',
                                text: '운행중 차량',
                            },
                            {
                                type: 'inactive',
                                text: '미운행 차량',
                            },
                            {
                                type: 'disabled',
                                text: '미관제 차량',
                            },
                        ]}
                    />
                </div>
                <div className={styles.mapWrapper}>
                    <Map />
                </div>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.calendarWrapper}>
                    <Calendar
                        calendarData={[
                            {
                                id: 1,
                                message: '즐거운 아침! 음악과 함께 시작.',
                                isActive: false,
                            },
                            {
                                id: 2,
                                message: '따뜻한 커피 한 잔은 건강에 좋아요.',
                                isActive: false,
                            },
                            {
                                id: 3,
                                message: '점심에는 스트레칭을 해볼까요?',
                                isActive: true,
                            },
                            {
                                id: 4,
                                message: '바이오리듬을 지키세요!',
                                isActive: false,
                            },
                            {
                                id: 5,
                                message: '눈 오는 날은 차량 운행에 주의하세요.',
                                isActive: false,
                            },
                        ]}
                    />
                </div>
                <div className={styles.noticeBoardWrapper}>
                    <NoticeBoard
                        noticeBoardData={[
                            {
                                id: 1,
                                title: '2025년 1분기 차량 정기점검 안내',
                                description:
                                    '2025년 1분기 차량 정기점검이 진행될 예정입니다. 담당자들은 일정을 확인하시고 차질없이 준비해주시기 바랍니다.',
                                imageUrl: '/images/notice-1.jpg',
                            },
                            {
                                id: 2,
                                title: '차량 관리 시스템 업데이트 공지',
                                description:
                                    '관제 시스템 2.0 버전이 출시됩니다. 주요 업데이트 내용은 실시간 모니터링 기능 개선과 보고서 자동화입니다.',
                                imageUrl: '/images/notice-2.jpg',
                            },
                            {
                                id: 3,
                                title: '전기차 충전소 확대 설치 안내',
                                description:
                                    '친환경 정책의 일환으로 전기차 충전소가 추가 설치됩니다. 설치 위치는 서울 본사 주차장과 부산 지점 2곳이며, 3월부터 이용 가능합니다.',
                                imageUrl: '/images/notice-3.jpg',
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePage
