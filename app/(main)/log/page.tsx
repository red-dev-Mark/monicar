'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import Breadcrumb from '@/components/common/Breadcrumb'
import ListHeader from '@/components/domain/vehicle/ListHeader'
import SearchField from '@/components/domain/vehicle/SearchField'
import { apiClient } from '@/lib/apis/client'

import ListItem from './components/ListItem/index'
import * as styles from './styles.css'
import { LogListResponse } from './types'

const ListPage = () => {
    const headerTitles = ['차량번호', '차종', '운행일수', '총운행거리', '차량현황']
    const router = useRouter()
    const [logData, setLogData] = useState<LogListResponse>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const getLogData = async () => {
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

    useEffect(() => {
        getLogData()
    }, [])

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
                <SearchField hasButton={true} />
                <ListHeader headerTitles={headerTitles} />
                {logData?.content.map((log) => (
                    <ListItem key={log.id} data={log} onClick={() => router.push(`/log/${log.id}`)} />
                ))}
            </div>
            {/* TODO 페이지네이션 추가 */}
        </div>
    )
}

export default ListPage
