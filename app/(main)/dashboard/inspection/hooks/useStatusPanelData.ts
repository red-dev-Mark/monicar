import { API_ENDPOINTS } from '@/constants/api'
import { useData } from '@/hooks/useData'
import { InspectionStatusType } from '@/types/vehicle'

export const useStatusPanelData = () => {
    const { data, isLoading, error } = useData<InspectionStatusType>({
        url: `${API_ENDPOINTS.STATS}`,
    })
    return { statusData: data, isLoading, error }
}
