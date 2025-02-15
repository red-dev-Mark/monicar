'use client'

import Image from 'next/image'
import { Suspense, useEffect, useState } from 'react'

import Calendar from '@/app/(main)/dashboard/components/Calendar'
// import VehicleMarker from '@/app/(main)/location/components/VehicleMarker'
// import SearchInput from '@/components/common/Input/SearchInput'
// import Modal from '@/components/common/Modal'
// import { ModalMessageType } from '@/components/common/Modal/types'
import Map from '@/components/domain/map/Map'
// import { useSearchSingleVehicle } from '@/hooks/useVehicleLocationSearch'
import { WhiteAlertIcon, WhiteBellIcon, WhiteCheckIcon, WhiteOnButtonIcon } from '@/public/icons'

import HeaderSkeleton from './components/HeaderSkeleton'
import InspectionStatus from './components/InspectionStatus'
import NoticeListBoard from './components/NoticeListBoard'
import VehicleStatusPanel from './components/VehicleStatusPanel'
import * as styles from './styles.css'

const DashboardPage = () => {
    // const {
    //     vehicleInfo,
    //     mapState,
    //     isVehicleVisible,
    //     searchTerm,
    //     modalMessage,
    //     isOpen,
    //     handleVehicleSearch,
    //     handleSearchChange,
    //     closeModal,
    // } = useSearchSingleVehicle()

    const [userInfo, setUserInfo] = useState({
        companyName: '',
        nickname: '',
    })
    const [isLoading] = useState()
    const [active, setActive] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((current) => (current + 1) % 3)
        }, 3000)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        const companyName = localStorage.getItem('company_name') || ''
        const nickname = localStorage.getItem('nickname') || ''

        setUserInfo(() => ({
            companyName,
            nickname,
        }))
    }, [])

    // const isVehicleMarkerVisible = !!(isVehicleVisible && vehicleInfo)

    if (isLoading) {
        return (
            <>
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
                                <HeaderSkeleton />
                            </div>
                        </header>

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

                        <div className={styles.vehicleStatusPanelWrapper}>
                            <VehicleStatusPanel />
                        </div>

                        <div className={styles.mapWrapper}>
                            {/* <div className={styles.searchInputWrapper}>
                        <SearchInput
                            icon='/icons/search-icon.svg'
                            value={searchTerm}
                            onChange={handleSearchChange}
                            onSubmit={handleVehicleSearch}
                        />
                    </div> */}
                            <Map />
                        </div>
                    </section>

                    <section className={styles.rightSection}>
                        <div className={styles.calendarWrapper}>
                            <Calendar
                                calendarData={[
                                    {
                                        id: 1,
                                        ranking: '🥇',
                                        message: '74나 3957 (49km)',
                                        isActive: active === 0,
                                    },
                                    {
                                        id: 2,
                                        ranking: '🥈',
                                        message: '45가 5858 (42km)',
                                        isActive: active === 1,
                                    },
                                    {
                                        id: 3,
                                        ranking: '🥉',
                                        message: '38모 1537 (38Km)',
                                        isActive: active === 2,
                                    },
                                ]}
                            />
                        </div>

                        <NoticeListBoard />
                    </section>
                </div>
            </>
        )
    }

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
                        <Suspense fallback={<HeaderSkeleton />}>
                            <span className={styles.userName}>
                                {userInfo.companyName}, {userInfo.nickname} 님 👋
                            </span>
                        </Suspense>
                    </div>
                </header>

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

                <div className={styles.vehicleStatusPanelWrapper}>
                    <VehicleStatusPanel />
                </div>

                <div className={styles.mapWrapper}>
                    {/* <div className={styles.searchInputWrapper}>
                        <SearchInput
                            icon='/icons/search-icon.svg'
                            value={searchTerm}
                            onChange={handleSearchChange}
                            onSubmit={handleVehicleSearch}
                        />
                    </div> */}
                    <Map />
                </div>
            </section>

            <section className={styles.rightSection}>
                <div className={styles.calendarWrapper}>
                    <Calendar
                        calendarData={[
                            {
                                id: 1,
                                ranking: '🥇',
                                message: '74나 3957 (49km)',
                                isActive: active === 0,
                            },
                            {
                                id: 2,
                                ranking: '🥈',
                                message: '45가 5858 (42km)',
                                isActive: active === 1,
                            },
                            {
                                id: 3,
                                ranking: '🥉',
                                message: '38모 1537 (38Km)',
                                isActive: active === 2,
                            },
                        ]}
                        isLoading={isLoading}
                    />
                </div>

                <NoticeListBoard />
            </section>

            {/* <Modal
                isOpen={isOpen}
                message={modalMessage as ModalMessageType}
                variant={{ variant: 'alert', confirmButton: '확인' }}
                onClose={closeModal}
            /> */}
        </div>
    )
}

export default DashboardPage
