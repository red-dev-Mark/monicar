// vehicle 관련 API

import { API_URL } from '@/constants/api'
import { apiClient } from '@/lib/apis/client'

// 예시 API 구조
export const vehicleAPI = {
    fetchVehicle: async (vehicleNumber: string) => {
        const response = await apiClient.get(`${API_URL}/api/v1/vehicle/${vehicleNumber}`)
        return response
    },
}
