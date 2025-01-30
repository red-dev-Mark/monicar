import { apiClient } from './client'

export const detailAPI = {
    deleteVehicle: async (id: number) => {
        const response = await apiClient.delete(`/api/v1/vehicles/${id}`)
        return response.data.result
    },
}
