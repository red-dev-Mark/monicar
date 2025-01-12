import { DateTime } from '@/app/(dashboard)/route/types/date'
import { formatToISODate } from '@/lib/utils/date'
import mockRoutesData from '@/mock/vehicle_route_data.json'

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
    fetchVehicleRoutesData: async (vehicleId: string, startDate: DateTime, endDate: DateTime, interval = 60) => {
        console.log(startDate)
        const formattedStartDate = formatToISODate(startDate)
        const formattedEndDate = formatToISODate(endDate)
        // const response = await apiClient.get(
        //     `${API_URL}/api/vi/vehicles/${vehicleId}/routes?startTime=${formattedStartDate}&endTime=${formattedEndDate}&interval=${interval}`,
        // )
        console.log(formattedStartDate, formattedEndDate, vehicleId, interval)

        // return response.result

        return mockRoutesData
    },
}
