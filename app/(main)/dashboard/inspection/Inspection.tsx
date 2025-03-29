'use client'

import { Group, Pagination } from '@mantine/core'
import Image from 'next/image'
import { useState } from 'react'

import Breadcrumbs from '@/components/common/Breadcrumbs'
import { useQueryParams } from '@/hooks/useQueryParams'
import { vehicleAPI } from '@/lib/apis/vehicle'
import { StatusType } from '@/types/vehicle'

import InspectionCard from './components/InspectionCard'
import InspectionStatusPanel from './components/InspectionStatusPanel'
import InspectionStatusTabs from './components/TabMenuWrapper'
import { useInspectionStatusData } from './hooks/useInspectionStatusData'
import { useStatusPanelData } from './hooks/useStatusPanelData'
import * as styles from './styles.css'

const Inspection = () => {
    const { addQuery, getQuery } = useQueryParams()
    const initialPage = Number(getQuery('page')) || 1
    const [activePage, setActivePage] = useState(initialPage)
    const status = (getQuery('status') as StatusType) || 'required'

    const { statusData, isLoading, error } = useStatusPanelData()
    const { inspectionData } = useInspectionStatusData({
        page: activePage.toString(),
        size: '8',
        status,
    })

    const patchInspectionStatusData = async (alarmId: number) => {
        try {
            await vehicleAPI.patchInspectionStatus(alarmId)
            window.location.reload()
        } catch (error) {
            console.error('이건 patch 에러', error)
        }
    }

    const handleButtonClick = async (alarmId: number) => {
        await patchInspectionStatusData(alarmId)
    }

    if (isLoading) {
        return
    }

    if (error) {
        return
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
            <InspectionStatusPanel statusData={statusData} />

            <InspectionStatusTabs status={status} />

            <div className={styles.cardWrapper}>
                {inspectionData?.content?.map((data) => (
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

            <div className={styles.paginationWrapper}>
                <Pagination.Root
                    total={100}
                    value={Number(activePage)}
                    onChange={(page) => {
                        setActivePage(page)
                        addQuery('page', String(page))
                    }}
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

export default Inspection
