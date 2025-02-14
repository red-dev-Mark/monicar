import { httpClient } from '@/lib/apis'
import { addOneDay, formatISODateToISOString } from '@/lib/utils/date'
import { Result } from '@/types/apis/common'
import { LiveRouteParams, RouteDetailParams, RouteDetailRequest, RouteParams, RouteRequest } from '@/types/apis/route'
import { Route } from '@/types/route'

export const routeService = {
    // 차량 운행 경로 조회
    getVehicleRoutesData: async ({
        vehicleId,
        dateRange,
        interval = 60,
    }: RouteRequest): Promise<Result<{ vehicleNumber: string; routes: Route[] }>> => {
        if (!vehicleId) {
            return {
                isSuccess: false,
                error: '차량 ID가 필요합니다',
            }
        }

        const [startDate, endDate] = dateRange
        if (!startDate || !endDate)
            return {
                isSuccess: false,
                error: '선택되지 않는 날짜가 포함되어 있습니다',
            }

        const startTime = formatISODateToISOString(startDate)
        const endTime = formatISODateToISOString(new Date(endDate.setDate(endDate.getDate() + 1)))

        const params: RouteParams = {
            startTime,
            endTime,
            interval,
        }

        const response = await httpClient.get(`api/v1/vehicle/${vehicleId}/routes`, {
            params,
        })

        const { result } = response.data

        return {
            isSuccess: true,
            data: result,
        }
    },
    // 지정된 시간 간격으로 경로 상세 정보 조회
    getVehicleRoutesDetail: async ({ vehicleId, startTime, endTime, page, interval = 60 }: RouteDetailRequest) => {
        if (!vehicleId) {
            return {
                isSuccess: false,
                error: '차량 ID가 필요합니다',
            }
        }

        if (!startTime || !endTime || !page) {
            return {
                isSuccess: false,
                error: '선택되지 않는 날짜가 포함되어 있습니다',
            }
        }

        const isOneDay = new Date(startTime).getTime() === new Date(endTime).getTime()
        const newStartTime = formatISODateToISOString(new Date(startTime))
        const newEndTime = isOneDay
            ? formatISODateToISOString(addOneDay(new Date(endTime)))
            : formatISODateToISOString(new Date(endTime))

        const params: RouteDetailParams = {
            startTime: newStartTime,
            endTime: newEndTime,
            page,
            interval,
        }

        const response = await httpClient.get(`api/v1/vehicle/${vehicleId}/routes/detail`, {
            params,
        })

        const { result } = response.data

        return {
            isSuccess: true,
            data: result,
        }
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
