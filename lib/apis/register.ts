import { RegisterVehicleModel, VehicleTypeModel } from '@/app/(main)/log/register/types'
import { API_URL } from '@/constants/api'
import { apiClient } from '@/lib/apis/client'

export const registerAPI = {
    getVehicleType: async (): Promise<VehicleTypeModel[]> => {
        const response = await apiClient.get(`${API_URL}/api/v1/driving-log/vehicle-type`)
        return response.data.result
    },

    postRegisterVehicle: async (data: RegisterVehicleModel) => {
        const response = await apiClient.post(`${API_URL}/api/v1/vehicles/register`, data)
        return response.data.result
    },
}
