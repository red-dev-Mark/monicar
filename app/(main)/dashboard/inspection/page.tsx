'use client'

import { Group, Pagination, Tabs } from '@mantine/core'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'

import Breadcrumbs from '@/components/common/Breadcrumbs'
import InspectionSkeleton from '@/components/common/Skeleton/InspectionSkeleton'
import PanelSkeleton from '@/components/common/Skeleton/PanelSkeleton'
import { vehicleService } from '@/lib/apis/vehicle'
import { AlarmResponse } from '@/types/vehicle'

import InspectionCard from './components/InspectionCard'
import InspectionStatusPanel from './components/InspectionStatusPanel'
import { useStatusPanelData } from './hooks/useStatusPanelData'
import * as styles from './styles.css'

const InspectionPage = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const status = searchParams.get('status') || 'REQUIRED'
    const [page] = useState(1)
    const [inspectionData, setInspectionData] = useState<AlarmResponse[]>([])
    const { statusData, isLoading, error } = useStatusPanelData()

    const getInspectionStatusData = async () => {
        try {
            const { isSuccess, data } = await vehicleService.getInspectionStatus(status || 'REQUIRED')
            if (!isSuccess) {
                throw new Error(data)
            }
            setInspectionData(data)
        } finally {
        }
    }

    const patchInspectionStatusData = async (alarmId: number) => {
        try {
            await vehicleService.patchInspectionStatus(alarmId)
            await getInspectionStatusData()
        } catch (error) {
            console.error('이건 patch 에러', error)
        }
    }

    const handleButtonClick = async (alarmId: number) => {
        await patchInspectionStatusData(alarmId)
    }

    const handleTabChange = (newStatus: string | null) => {
        router.push(`/dashboard/inspection?status=${newStatus}`)
    }

    useEffect(() => {
        getInspectionStatusData()
    }, [status, page])

    if (error) {
        return
    }

    if (isLoading) {
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

                <PanelSkeleton />

                <Tabs color='#ff385c' variant='pills' radius='xl' value={status} onChange={handleTabChange}>
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

            <InspectionStatusPanel data={statusData} />

            <Suspense fallback={<div>로딩 중</div>}>
                <Tabs color='#ff385c' variant='pills' radius='xl' value={status} onChange={handleTabChange}>
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
            </Suspense>

            <Suspense fallback={<InspectionSkeleton />}>
                <div className={styles.cardWrapper}>
                    {inspectionData?.map((data) => (
                        <InspectionCard
                            key={data.id}
                            vehicleNumber={data.vehicleNumber}
                            status={data.status}
                            drivingDistance={data.drivingDistance}
                            managerName={data.managerName}
                            onClick={() => handleButtonClick(data.id)}
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
