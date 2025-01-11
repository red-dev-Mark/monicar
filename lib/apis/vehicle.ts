// vehicle 관련 API

// import { API_URL } from '@/constants/api'
// import { apiClient } from '@/lib/apis/client'

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
    fetchVehicleRoutesData: async () => {
        // fetchVehicleRoutesData: async (vehicleId: string, startDate: string, endDate: string, interval: number = 60) => {
        // const response = await apiClient.get(
        //     `${API_URL}/api/vi/vehicles/${vehicleId}/routes?startTime=${startDate}&endTime=${endDate}&interval=${interval}`,
        // )

        const response = {
            isSuccess: true,
            message: '요청 성공',
            result: {
                vehicleNumber: '54하7056',
                routes: [
                    {
                        lat: 37925737,
                        lon: 130462369,
                        speed: 60,
                        timestamp: '2024-12-26T09:30:00',
                    },
                    // 1시간 간격의 시간순으로 정렬된 위치 데이터 . . .
                ],
            },
        }
        return response.result
    },
}
