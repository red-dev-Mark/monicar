import { API_URL } from '@/constants/api'
import { apiClient } from '@/lib/apis/client'
// import { DateTime } from '@/app/route/types/date'
// import { formatToISODate } from '@/lib/utils/date'
import mockRoutesData from '@/mock/vehicle_route_data.json'
import { VehicleDetailsModel, VehicleStatusType } from '@/types/vehicle'

// 예시 API 구조
export const vehicleAPI = {
    getVehicleInfo: async (vehicleNumber: string) => {
        const response = await apiClient.get(`${API_URL}/api/v1/vehicles/search?vehicle-number=${vehicleNumber}`)

        if (!response.data.isSuccess) {
            if (response.data.errorCode === 1003) {
                return { isValid: false, value: '등록되지 않은 차량입니다.' }
            }
        }

        return { isValid: true, value: response.data.result }
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
                    lat: 37.805,
                    lng: 128.9016,
                    lastUpdated: '2024-12-24T10:30:00',
                },
            },
        }
        return response.result
    },
    fetchVehicleRoutesData: async () => {
        // fetchVehicleRoutesData: async (vehicleId: string, startDate: DateTime, endDate: DateTime, interval = 60) => {
        // const formattedStartDate = formatToISODate(startDate)
        // const formattedEndDate = formatToISODate(endDate)
        // const response = await apiClient.get(
        //     `${API_URL}/api/vi/vehicles/${vehicleId}/routes?startTime=${formattedStartDate}&endTime=${formattedEndDate}&interval=${interval}`,
        // )
        // console.log(formattedStartDate, formattedEndDate, vehicleId, interval)

        // return response.result

        return mockRoutesData
    },
}
