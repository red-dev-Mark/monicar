import { DateTime } from '@/app/(main)/route/types/date'
import { httpClient } from '@/lib/apis'
import { formatToISODate } from '@/lib/utils/date'
import { LiveRouteParams, RouteParams } from '@/types/apis/route'

export const routeService = {
    // 차량 이동 경로 이력 조회
    getVehicleRoutesData: async (vehicleId: string, startDate: DateTime, endDate: DateTime, interval = 60) => {
        const params: RouteParams = {
            startTime: formatToISODate(startDate),
            endTime: formatToISODate(endDate),
            interval,
        }

        const response = await httpClient.get(`api/v1/vehicle/${vehicleId}/routes`, {
            params,
        })

        const { result } = response.data

        return result
    },
    // 차량 실시간 이동 경로 조회
    getVehicleLiveRoutes: async (vehicleId: string) => {
        // const currentTime = new Date()
        const params: LiveRouteParams = {
            currentTime: '2025-01-27T21:23:00',
            // currentTime,
        }

        const response = await httpClient.get(`api/v1/vehicle/${vehicleId}/recent/routes`, {
            params,
        })

        const { result } = response.data

        console.log(result)

        // return response.data.result
    },
}
