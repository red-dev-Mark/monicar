import { useMemo } from 'react'

import { useData } from '@/hooks/useData'
import { HourlyListItemModel } from '@/types/log'

interface HourlyData {
    url: string
    date: string
}
export const useHourlyData = ({ url, date }: HourlyData) => {
    const params = useMemo(
        () => ({
            date,
        }),
        [date],
    )

    const { data, isLoading, error } = useData<HourlyListItemModel[]>({
        url,
        params,
    })

    return { hourlyData: data, isLoading, error }
}
