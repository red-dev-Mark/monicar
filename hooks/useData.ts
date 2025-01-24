import { useEffect, useState } from 'react'

import { apiClient } from '@/lib/apis/client'

export interface UseDataProps {
    url: string
    params?: Record<string, string | number>
    path?: string
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
                setData(response.data.result)
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
