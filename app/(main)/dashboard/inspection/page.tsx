'use client'
import { Group, Pagination, Tabs } from '@mantine/core'
import Image from 'next/image'
import { Suspense, useState } from 'react'

import Breadcrumbs from '@/components/common/Breadcrumbs'

import InspectionCard from './components/InspectionCard'
import InspectionSkeleton from './components/InspectionSkeleton'
import InspectionStatusPanel from './components/InspectionStatusPanel'
import * as styles from './styles.css'

// TODO: 실제 데이터로 교체

const mockInspections = [
    {
        id: 1,
        vehicleNumber: '11가 4564',
        status: 'REQUIRED',
        drivingDistance: 3949,
        managerName: '김모니',
    },
    {
        id: 2,
        vehicleNumber: '22나 5678',
        status: 'REQUIRED',
        drivingDistance: 2845,
        managerName: '이점검',
    },
    {
        id: 3,
        vehicleNumber: '33다 9012',
        status: 'REQUIRED',
        drivingDistance: 5632,
        managerName: '박관리',
    },
    {
        id: 4,
        vehicleNumber: '44라 3456',
        status: 'REQUIRED',
        drivingDistance: 4123,
        managerName: '최담당',
    },
    {
        id: 5,
        vehicleNumber: '55마 7890',
        status: 'REQUIRED',
        drivingDistance: 3567,
        managerName: '정기사',
    },
    {
        id: 6,
        vehicleNumber: '66바 1234',
        status: 'REQUIRED',
        drivingDistance: 4789,
        managerName: '강점검',
    },
    {
        id: 7,
        vehicleNumber: '77사 5678',
        status: 'COMPLETED',
        drivingDistance: 2934,
        managerName: '윤담당',
    },
    {
        id: 8,
        vehicleNumber: '88아 9012',
        status: 'REQUIRED',
        drivingDistance: 5123,
        managerName: '한기사',
    },
] as const

const InspectionPage = () => {
    const [activeTab, setActiveTab] = useState<string | null>('REQUIRED')
    const [isLoading] = useState()

    const inspection = mockInspections.filter((item) => item.status === activeTab)

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

                    <div className={styles.breadcrumbsWrapper}>
                        <Breadcrumbs
                            breadcrumbsData={[
                                { title: '대시보드', isActive: false },
                                { title: '점검현황', isActive: true },
                            ]}
                        />
                    </div>

                    <InspectionStatusPanel />

                    <Tabs color='#ff385c' variant='pills' radius='xl' value={activeTab} onChange={setActiveTab}>
                        <Tabs.List className={styles.tabsWrapper}>
                            <Tabs.Tab className={styles.tab} value='REQUIRED'>
                                점검 필요
                            </Tabs.Tab>
                            <Tabs.Tab className={styles.tab} value='SCHEDULED'>
                                점검 예정
                            </Tabs.Tab>
                            <Tabs.Tab className={styles.tab} value='INPROGRESS'>
                                점검 진행
                            </Tabs.Tab>
                            <Tabs.Tab className={styles.tab} value='COMPLETED'>
                                점검 완료
                            </Tabs.Tab>
                        </Tabs.List>
                    </Tabs>

                    <InspectionSkeleton />

                    <div className={styles.paginationWrapper}>
                        <Pagination.Root total={1} color='#ff385c' boundaries={0}>
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

            <div className={styles.breadcrumbsWrapper}>
                <Breadcrumbs
                    breadcrumbsData={[
                        { title: '대시보드', isActive: false },
                        { title: '점검현황', isActive: true },
                    ]}
                />
            </div>

            <InspectionStatusPanel />

            <Tabs color='#ff385c' variant='pills' radius='xl' value={activeTab} onChange={setActiveTab}>
                <Tabs.List className={styles.tabsWrapper}>
                    <Tabs.Tab className={styles.tab} value='REQUIRED'>
                        점검 필요
                    </Tabs.Tab>
                    <Tabs.Tab className={styles.tab} value='SCHEDULED'>
                        점검 예정
                    </Tabs.Tab>
                    <Tabs.Tab className={styles.tab} value='INPROGRESS'>
                        점검 진행
                    </Tabs.Tab>
                    <Tabs.Tab className={styles.tab} value='COMPLETED'>
                        점검 완료
                    </Tabs.Tab>
                </Tabs.List>
            </Tabs>

            <Suspense fallback={<InspectionSkeleton />}>
                <div className={styles.cardWrapper}>
                    {inspection.map((item) => (
                        <InspectionCard
                            key={item.id}
                            vehicleNumber={item.vehicleNumber}
                            status={item.status}
                            drivingDistance={item.drivingDistance}
                            managerName={item.managerName}
                        />
                    ))}
                </div>
            </Suspense>

            <div className={styles.paginationWrapper}>
                <Pagination.Root total={1} color='#ff385c' boundaries={0}>
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

export default InspectionPage
