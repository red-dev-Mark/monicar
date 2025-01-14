// vehicle 관련 API

import { API_URL } from '@/constants/api'
import { apiClient } from '@/lib/apis/client'
import { VehicleDetailsModel, VehicleStatusType } from '@/types/vehicle'

// 예시 API 구조
export const vehicleAPI = {
    fetchVehicle: async (vehicleNumber: string) => {
        const response = await apiClient.get(`${API_URL}/api/v1/vehicle/${vehicleNumber}`)
        return response
    },
    // fetchVehicleDetails: async (vehicleId: string) => {
    fetchVehicleDetails: async (): Promise<VehicleDetailsModel> => {
        // const response = await apiClient.get(`${API_URL}/api/v1/vehicles/${vehicleId}`)
        const response = {
            isSuccess: true,
            message: '요청 성공',
            result: {
                department: '04/09 조직',
                vehicleId: 'V123',
                vehicleNumber: '54하7056',
                driverName: '홍길동',
                status: {
                    type: 'ON' as VehicleStatusType, // "ON" | "OFF"
                    speed: 60,
                    lastEngineOn: '2024-12-24T08:30:00',
                    lastEngineOff: '2024-12-23T18:30:00',
                },
                dailyStatus: {
                    distance: 152.4,
                    drivingTime: 18000,
                },
                location: {
                    lat: 37.5363641,
                    lng: 126.8876848,
                    lastUpdated: '2024-12-24T10:30:00',
                },
            },
        }
        return response.result
    },
}
