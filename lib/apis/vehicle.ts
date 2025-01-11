// vehicle 관련 API

// import { API_URL } from '@/constants/api'
// import { apiClient } from '@/lib/apis/client'

// 예시 API 구조
export const vehicleAPI = {
    fetchVehicleData: async (_vehicleNumber: string) => {
        // const response = await apiClient.get(`${API_URL}/api/v1/vehicles?vehicleNumber=${vehicleNumber}`)

        const response = {
            isSuccess: true,
            message: '요청 성공',
            result: {
                vehicleId: 'V123',
                vehicleNumber: '54하2902',
                firstDateAt: '2024-01-15T09:30:00',
                lastDateAt: '2024-01-21T14:30:00',
            },
        }

        return response.result
    },
}
