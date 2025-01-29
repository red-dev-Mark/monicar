import { useData } from '@/hooks/useData'

import { DetailResponse } from '../types'

interface Test {
    url: string
}

export const useDetailData = ({ url }: Test) => {
    const { data, isLoading, error } = useData<DetailResponse>({
        url,
    })
    return { logData: data, isLoading, error }
}
