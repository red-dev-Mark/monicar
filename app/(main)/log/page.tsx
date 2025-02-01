'use client'
import { Group, Pagination } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import Breadcrumb from '@/components/common/Breadcrumb'
import ControlBar from '@/components/domain/vehicle/ControlBar'
import ListHeader from '@/components/domain/vehicle/ListHeader'
import { LOG_TITLES } from '@/constants/listHeader'

import ListItem from './components/ListItem/index'
import { useLogData } from './hooks/useLogData'
import * as styles from './styles.css'
import { downloadExcel } from './utils/excel'

const LogPage = () => {
    const router = useRouter()
    const [activePage, setActivePage] = useState(1)
    const { logData, isLoading, error } = useLogData(activePage - 1)

    const handleExcelButtonClick = () => {
        if (!logData?.content) return
        downloadExcel(logData.content)
    }

    const handleItemClick = (id: number) => {
        router.push(`/log/${id}`)
    }

    if (isLoading) {
        return <div> 로딩 중...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div className={styles.container}>
            <Breadcrumb type={'운행기록'} />
            <div className={styles.contents}>
                <ControlBar onExcelButtonClick={handleExcelButtonClick} />
                <ListHeader headerTitles={LOG_TITLES} />
                {logData?.content.map((log) => (
                    <ListItem key={log.id} data={log} onClick={() => handleItemClick(log.id)} />
                ))}
            </div>
            <div className={styles.pagination}>
                <Pagination.Root total={logData?.totalPages || 1} value={activePage} onChange={setActivePage}>
                    <Group gap={5} justify='center' color='f6f6f6'>
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

export default LogPage
