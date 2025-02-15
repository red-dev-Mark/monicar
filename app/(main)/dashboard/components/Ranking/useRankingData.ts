import { API_ENDPOINTS } from '@/constants/api'
import { useData } from '@/hooks/useData'

import { RankingResponse } from './types'

export const useRankingData = () => {
    const { data, isLoading, error } = useData<RankingResponse[]>({
        url: `${API_ENDPOINTS.RANK}`,
    })
    return { rankingData: data, isLoading, error }
}
