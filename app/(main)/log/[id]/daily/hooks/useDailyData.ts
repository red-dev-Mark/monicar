import { useMemo } from 'react'

import { useData } from '@/hooks/useData'
import { DailyListItemModel } from '@/types/log'

interface DailyData {
    url: string
    period?: string
}

export const useDailyData = ({ url, period }: DailyData) => {
    const params = useMemo(
        () => ({
            period,
        }),
        [period],
    )
    const { data, isLoading, error } = useData<DailyListItemModel[]>({
        url,
        params,
    })
    return { dailyData: data, isLoading, error }
}
