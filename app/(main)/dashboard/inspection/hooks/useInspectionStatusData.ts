import { useMemo } from 'react'

import { API_ENDPOINTS } from '@/constants/api'
import { useData } from '@/hooks/useData'
import { InspectionStatusResponse } from '@/types/vehicle'

interface InspectionStatusData {
    page: string
    size: string
    status: string
}

export const useInspectionStatusData = ({ page, size, status }: InspectionStatusData) => {
    const params = useMemo(
        () => ({
            page,
            size,
            status,
        }),
        [page, size, status],
    )

    const { data, isLoading, error } = useData<InspectionStatusResponse>({
        url: `${API_ENDPOINTS.ALARM}`,
        params,
    })
    return { inspectionData: data, isLoading, error }
}
