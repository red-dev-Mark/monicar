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
        try {
            const [startDate, endDate] = dateRange
            if (!vehicleId) throw new Error('차량 ID가 필요합니다')
            if (!startDate || !endDate) throw new Error('선택되지 않는 날짜가 포함되어 있습니다')

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

            if (!response.data.isSuccess) throw new Error(response.data.errorMessage)
            return { isSuccess: true, data: response.data.result }
        } catch (error) {
            return {
                isSuccess: false,
                error: error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다',
            }
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
        const currentTime = new Date()

        const params: LiveRouteParams = {
            currentTime: formatISODateToISOString(currentTime),
        }

        const response = await httpClient.get(`api/v1/vehicle/${vehicleId}/recent/routes`, {
            params,
        })
        if (!response.data.isSuccess) {
            return { isSuccess: false, error: '서버 연결에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요' }
        }

        const { result } = response.data

        return {
            isSuccess: true,
            data: result,
        }
    },
}
