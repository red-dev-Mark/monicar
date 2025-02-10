import { RegisterVehicleModel, VehicleTypeModel } from '@/app/(main)/log/register/types'
import { httpClient } from '@/lib/apis'
import { normalizeCoordinate } from '@/lib/utils/normalize'
import { removeSpaces } from '@/lib/utils/string'

export const vehicleService = {
    // 차량 정보 조회
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

        const { result } = response.data

        const normalizeResult = {
            vehicleId: result.vehicleId,
            vehicleNumber: result.vehicleNumber,
            coordinate: {
                lat: normalizeCoordinate(result.recentCycleInfo.lat),
                lng: normalizeCoordinate(result.recentCycleInfo.lng),
            },
        }

        return { isValid: true, value: normalizeResult }
    },

    // 차량 상세정보 조회
    getVehicleDetail: async (vehicleId: string) => {
        const response = await httpClient.get(`api/v1/vehicle/${vehicleId}`)

        return response.data.result
    },

    // 차량 운행 상태별 현황 조회 (전체/운행중/미운행)
    getVehicleStatus: async () => {
        const response = await httpClient.get(`api/v1/vehicle/status`)

        return response.data.result
    },

    // 차량번호로 운행 이력 기간 조회
    getVehicleOperationHistory: async (vehicleNumber: string) => {
        const response = await httpClient.get(`api/v1/vehicle`, {
            params: {
                vehicleNumber: removeSpaces(vehicleNumber),
            },
        })

        const { result } = response.data

        if (!result) {
            return { isValid: false, value: '등록되지 않은 차량입니다.' }
        }

        return { isValid: true, value: result }
    },

    // 등록 가능한 차량 번호 조회
    getAvailableVehicleNumber: async (vehicleNumber: string) => {
        const response = await httpClient.get(`api/v1/vehicle/check`, { params: { vehicleNumber } })
        if (!response.data.isSuccess) {
            throw response.data.errorMessage
        }
        return response.data
    },

    // 등록 가능한 차량 유형 목록 조회
    getAvailableVehicleTypes: async (): Promise<VehicleTypeModel[]> => {
        const response = await httpClient.get(`api/v1/log/vehicle-type`)

        return response.data.result
    },

    // 신규 차량 정보 등록
    registerVehicle: async (data: RegisterVehicleModel) => {
        const response = await httpClient.post(`api/v1/vehicle/register`, data)

        if (!response.data.isSuccess) {
            if (response.data.errorCode === 1001) {
                return response.data.errorMessage
            }
        }

        return response.data
    },

    // 등록된 차량 정보 삭제
    deleteVehicle: async (vehicleId: number) => {
        const response = await httpClient.delete(`api/v1/vehicle/${vehicleId}`)

        if (!response.data && response.data.errorCode === 1006) {
            return {
                isSuccess: false,
                message: '해당 차종이 존재하지 않습니다.',
            }
        }
        return response.data
    },
    // 일별 운행기록
    // getVehicleDailyLog: async (vehicleId: string) => {
    //     const response = await httpClient.get(`api/v1/log/daily/${vehicleId}`)

    //     if (!response.data.isSuccess) {
    //         return {
    //             errorMessage: response.data.errorMessage,
    //         }
    //     }

    //     return response.data.result
    // },
}
