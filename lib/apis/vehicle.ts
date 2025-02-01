import { RegisterVehicleModel, VehicleTypeModel } from '@/app/(main)/log/register/types'
import { httpClient } from '@/lib/apis/client'
import { normalizeVehicleResponse } from '@/lib/utils/normalize'
import { removeSpaces } from '@/lib/utils/string'
import mockRoutesData from '@/mock/vehicle_route_data.json'

export const vehicleService = {
    // 개별차량 검색 조회
    getVehicleInfo: async (vehicleNumber: string) => {
        const response = await httpClient.get(`api/v1/vehicle/search`, {
            params: {
                'vehicle-number': removeSpaces(vehicleNumber),
            },
        })

        if (!response.data.isSuccess) {
            if (response.data.errorCode === 1003) {
                return { isValid: false, value: '등록되지 않은 차량입니다.' }
            }
        }

        const normalizeResult = normalizeVehicleResponse(response.data.result)
        return { isValid: true, value: normalizeResult }
    },

    // 개별차량 상세정보 조회
    getVehicleDetailInfo: async (vehicleId: string) => {
        const response = await httpClient.get(`api/v1/vehicle/${vehicleId}`)

        return response.data.result
    },

    // 시동 여부에 따른 차량 현황 조회
    getVehicleStatus: async () => {
        const response = await httpClient.get(`api/v1/vehicle/status`)

        return response.data.result
    },

    // getVehicleRoutesData: async () => {
    // getVehicleRoutesData: async (vehicleId: string, startDate: DateTime, endDate: DateTime, interval = 60) => {
    fetchVehicleRoutesData: async () => {
        // fetchVehicleRoutesData: async (vehicleId: string, startDate: DateTime, endDate: DateTime, interval = 60) => {
        // const formattedStartDate = formatToISODate(startDate)
        // const formattedEndDate = formatToISODate(endDate)
        // const response = await apiClient.get(
        //     `${API_URL}/api/vi/vehicle/${vehicleId}/routes?startTime=${formattedStartDate}&endTime=${formattedEndDate}&interval=${interval}`,
        // )
        // console.log(formattedStartDate, formattedEndDate, vehicleId, interval)

        // return response.result

        return mockRoutesData
    },

    getVehicleType: async (): Promise<VehicleTypeModel[]> => {
        const response = await httpClient.get(`/api/v1/log/vehicle-type`)

        return response.data.result
    },

    postVehicleInfo: async (data: RegisterVehicleModel) => {
        const response = await httpClient.post(`/api/v1/vehicle/register`, data)

        if (!response.data.isSuccess) {
            if (response.data.errorCode === 1001) {
                return {
                    isSuccess: false,
                    message: '해당 차종이 존재하지 않습니다.',
                }
            }
            if (response.data.errorCode === 1002) {
                return {
                    isSuccess: false,
                    message: '해당 차종이 존재하지 않습니다.',
                }
            }
        }

        console.log('post!!!!: ', response.data)
        return response.data.result
    },

    deleteVehicle: async (id: number) => {
        const response = await httpClient.delete(`/api/v1/vehicle/${id}`)

        if (!response.data && response.data.errorCode === 1006) {
            return {
                isSuccess: false,
                message: '해당 차종이 존재하지 않습니다.',
            }
        }
        return response.data
    },
}
