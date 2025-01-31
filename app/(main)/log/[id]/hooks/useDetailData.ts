import { useData } from '@/hooks/useData'

import { DetailResponse } from '../types'

interface DataRequest {
    url: string
}

export const useDetailData = ({ url }: DataRequest) => {
    const { data, isLoading, error } = useData<DetailResponse>({
        url,
    })
    return { logData: data, isLoading, error }
}
