'use client'

import { Group, Pagination, Tabs } from '@mantine/core'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import Breadcrumbs from '@/components/common/Breadcrumbs'
import InspectionSkeleton from '@/components/common/Skeleton/InspectionSkeleton'
import { vehicleService } from '@/lib/apis/vehicle'
import { AlarmResponse, InspectionStatusType } from '@/types/vehicle'

import InspectionCard from './components/InspectionCard'
import InspectionStatusPanel from './components/InspectionStatusPanel'
import * as styles from './styles.css'

const InspectionPage = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const status = searchParams.get('status') || 'REQUIRED'
    const [inspectionData, setInspectionData] = useState<AlarmResponse[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [page] = useState(1)
    const [statusPanelData, setStatusPanelData] = useState<InspectionStatusType>()

    const getInspectionStatusData = async () => {
        try {
            setIsLoading(true)
            const { isSuccess, data } = await vehicleService.getInspectionStatus(status || 'REQUIRED')
            if (!isSuccess) {
                throw new Error(data)
            }
            setInspectionData(data)
        } finally {
            setIsLoading(false)
        }
    }

    const getStatusPanelData = async () => {
        try {
            const response = await vehicleService.getInspectionStatusStats()
            if (response.isSuccess) {
                setStatusPanelData(response.data)
            }
        } catch (error) {
            console.error('통계 실패', error)
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
        getStatusPanelData()
    }, [])

    useEffect(() => {
        getInspectionStatusData()
    }, [status, page])

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

            <InspectionStatusPanel data={statusPanelData} />

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

            <div className={styles.cardWrapper}>
                {isLoading ? (
                    <InspectionSkeleton />
                ) : (
                    inspectionData?.map((data) => (
                        <InspectionCard
                            key={data.id}
                            vehicleNumber={data.vehicleNumber}
                            status={data.status}
                            drivingDistance={data.drivingDistance}
                            managerName={data.managerName}
                            onClick={() => handleButtonClick(data.id)}
                        />
                    ))
                )}
            </div>

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
