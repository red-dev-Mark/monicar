'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'

import Breadcrumb from '@/components/common/Breadcrumb'
import ListHeader from '@/components/domain/vehicle/ListHeader'
import SearchField from '@/components/domain/vehicle/SearchField'
import { apiClient } from '@/lib/apis/client'

import ListItem from './components/ListItem/index'
import { HEADER_TITLES } from './constants'
import * as styles from './styles.css'
import { LogListResponse } from './types'

const LogPage = () => {
    const [logData, setLogData] = useState<LogListResponse>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const router = useRouter()

    useEffect(() => {
        handleGetLogData()
    }, [])

    const handleGetLogData = async () => {
        try {
            setIsLoading(true)
            const response = await apiClient.get('/api/v1/driving-log?page=1&size=10')
            setLogData(response.data.result)
        } catch (error) {
            setError('데이터 불러오기 실패')
            console.error('Error', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleExcelDownload = () => {
        if (!logData?.content) return

        const excelData = logData.content.map((item) => ({
            차량번호: item.vehicleNumber,
            차종: item.vehicleModel,
            운행일수: item.drivingDays,
            총운행거리: `${item.totalDistance}km`,
            차량현황: item.status,
        }))
        const wb = XLSX.utils.book_new()
        const ws = XLSX.utils.json_to_sheet(excelData)
        XLSX.utils.book_append_sheet(wb, ws, '차량운행기록')
        XLSX.writeFile(wb, '차량운행기록.xlsx')
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
            <div className={styles.contents}>
                <Breadcrumb type={'운행기록'} />
                <SearchField hasButton={true} onExcelDownload={handleExcelDownload} />
                <ListHeader headerTitles={HEADER_TITLES} />
                {logData?.content.map((log) => (
                    <ListItem key={log.id} data={log} onClick={() => handleItemClick(log.id)} />
                ))}
            </div>
            {/* TODO 페이지네이션 추가 */}
        </div>
    )
}

export default LogPage
