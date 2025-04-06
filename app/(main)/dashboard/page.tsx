'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'

import Calendar from '@/app/(main)/dashboard/components/Calendar'
import SignOutButton from '@/components/common/SignOutButton'
import HeaderSkeleton from '@/components/common/Skeleton/HeaderSkeleton'
import Map from '@/components/domain/map/Map'
import { WhiteAlertIcon, WhiteBellIcon, WhiteCheckIcon, WhiteOnButtonIcon } from '@/public/icons'
import { StatusType } from '@/types/vehicle'

import InspectionStatus from './components/InspectionStatus'
import NoticeListBoard from './components/NoticeListBoard'
import VehicleStatusPanel from './components/VehicleStatusPanel'
import { useStatusPanelData } from './inspection/hooks/useStatusPanelData'
import * as styles from './styles.css'

const DashboardPage = () => {
    const router = useRouter()
    const [userInfo, setUserInfo] = useState({
        companyName: '',
        nickname: '',
    })
    const [isLoading, setIsLoading] = useState(true)
    const { statusData } = useStatusPanelData()

    const handleStatusClick = (status: StatusType) => {
        router.push(`/dashboard/inspection?status=${status}`)
    }

    useEffect(() => {
        const getUserInfo = async () => {
            const companyName = localStorage.getItem('company_name') || ''
            const nickname = localStorage.getItem('nickname') || ''

            setUserInfo(() => ({
                companyName,
                nickname,
            }))
            setIsLoading(false)
        }

        getUserInfo()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.logoWrapper}>
                <Image
                    src={'/text-logo.png'}
                    width={152}
                    height={30}
                    alt='로고'
                    style={{ width: '152px', height: '30px' }}
                />
            </div>

            <section className={styles.leftSection}>
                <header className={styles.header}>
                    <div className={styles.introduce}>
                        안녕하세요,
                        {/* <Suspense fallback={<HeaderSkeleton />}> */}
                        {isLoading ? (
                            <HeaderSkeleton />
                        ) : (
                            <span className={styles.userName}>
                                {userInfo.companyName}, {userInfo.nickname} 님 👋
                            </span>
                        )}
                        {/* </Suspense> */}
                    </div>
                </header>

                <Suspense fallback={<div>로딩 중</div>}>
                    <InspectionStatus
                        inspectionStatusData={[
                            {
                                status: 'REQUIRED',
                                icon: <WhiteBellIcon color='white' size={24} />,
                                text: '점검 필요',
                                iconType: 'bell',
                                count: statusData?.required || 0,
                            },
                            {
                                status: 'SCHEDULED',
                                icon: <WhiteAlertIcon color='white' size={24} />,
                                text: '점검 예정',
                                iconType: 'alert',
                                count: statusData?.scheduled || 0,
                            },
                            {
                                status: 'INPROGRESS',
                                icon: <WhiteOnButtonIcon color='white' size={24} />,
                                text: '점검 진행',
                                iconType: 'button',
                                count: statusData?.inProgress || 0,
                            },
                            {
                                status: 'COMPLETED',
                                icon: <WhiteCheckIcon color='white' size={24} />,
                                text: '점검 완료',
                                iconType: 'check',
                                count: statusData?.completed || 0,
                            },
                        ]}
                        onStatusClick={handleStatusClick}
                    />
                </Suspense>

                <div className={styles.vehicleStatusPanelWrapper}>
                    <VehicleStatusPanel />
                </div>

                <div className={styles.mapWrapper}>
                    <Map />
                </div>
            </section>

            <section className={styles.rightSection}>
                <div className={styles.calendarWrapper}>
                    <Calendar />
                </div>

                <NoticeListBoard />

                {!isLoading && (
                    <div className={styles.signOutButton}>
                        <SignOutButton />
                    </div>
                )}
            </section>
        </div>
    )
}

export default DashboardPage
