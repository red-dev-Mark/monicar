import { API_ENDPOINTS } from '@/constants/api'
import { useData } from '@/hooks/useData'

import { LogListResponse } from '../types'

export const useLogData = (page: number) => {
    const { data, isLoading, error } = useData<LogListResponse>({
        url: `${API_ENDPOINTS.LOG}?page=${page}&size=10`,
        // params: { page, size: 8 },
    })
    return { logData: data, isLoading, error }
}
