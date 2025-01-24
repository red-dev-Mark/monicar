import { useEffect, useState } from 'react'

import { DATA_PATHS } from '@/constants/data'
import { apiClient } from '@/lib/apis/client'

type PathType = keyof typeof DATA_PATHS

export interface UseDataProps {
    url: string
    params?: Record<string, string | number>
    path: PathType
}

export const useData = <T>({ url, params, path }: UseDataProps) => {
    const [data, setData] = useState<T>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true)
                const response = await apiClient.get(url, { params })
                setData(response.data[path])
            } catch (error) {
                setError('데이터 불러오기 실패')
                console.error('Error', error)
            } finally {
                setIsLoading(false)
            }
        }
        getData()
    }, [url, params, path])

    return { data, isLoading, error }
}
