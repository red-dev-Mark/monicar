import { API_ENDPOINTS } from '@/constants/api'
import { useData } from '@/hooks/useData'

import { LogListResponse } from '../types'

export const useLogData = () => {
    const { data, isLoading, error } = useData<LogListResponse>({
        url: `${API_ENDPOINTS.LOG}`,
    })
    return { logData: data, isLoading, error }
}
