import { RegisterVehicleModel, VehicleTypeModel } from '@/app/(main)/log/register/types'
import { apiClient } from '@/lib/apis/client'

export const registerAPI = {
    getVehicleType: async (): Promise<VehicleTypeModel[]> => {
        const response = await apiClient.get(`/api/v1/driving-log/vehicle-type`)
        return response.data.result
    },

    postRegisterVehicle: async (data: RegisterVehicleModel) => {
        const response = await apiClient.post(`/api/v1/vehicles/register`, data)
        return response.data.result
    },
}
