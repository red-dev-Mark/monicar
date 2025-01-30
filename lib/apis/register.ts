import { API_URL } from '@/constants/api'
import { apiClient } from '@/lib/apis/client'

export const registerAPI = {
    getVehicleType: async () => {
        const response = await apiClient.get(`${API_URL}/api/v1/driving-log/vehicle-type`)

        return response.data.result
    },
}
