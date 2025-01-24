import { useData } from '@/hooks/useData'

import { LogListResponse } from '../types'

export const useLogData = () => {
    const { data, isLoading, error } = useData<LogListResponse>({
        url: '/api/v1/driving-log?page=1&size=8',
        path: 'result',
    })
    return { logData: data, isLoading, error }
}
