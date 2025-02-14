import { useMemo } from 'react'

import { useData } from '@/hooks/useData'
import { DailyInformation } from '@/types/log'

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
    const { data, isLoading, error } = useData<DailyInformation>({
        url,
        params,
    })
    return { dailyData: data, isLoading, error }
}
