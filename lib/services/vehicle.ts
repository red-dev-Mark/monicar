import { vehicleService } from '@/lib/apis'
import { validateVehicleNumber } from '@/lib/utils/validation'
import { Result } from '@/types/apis/common'
import { Vehicle, VehicleLocation } from '@/types/vehicle'

export const getVehicleOperationInfo = async (vehicleNumber: string): Promise<Result<Vehicle>> => {
    const validation = validateVehicleNumber(vehicleNumber)
    if (!validation.isValid) {
        return { isSuccess: false, error: validation.message! }
    }
    try {
        const response = await vehicleService.getVehicleOperationPeriod(vehicleNumber)
        if (!response.isValid) {
            return { isSuccess: false, error: response.value }
        }

        if (typeof response.value !== 'string') {
            return {
                isSuccess: true,
                data: {
                    vehicleId: response.value.vehicleId as string,
                    vehicleNumber: response.value.vehicleNumber as string,
                    firstOperationDate: response.value.operationPeriod.firstDateAt,
                    lastOperationDate: response.value.operationPeriod.lastDateAt,
                },
            }
        }

        return { isSuccess: false, error: '유효하지 않은 차량 정보입니다' }
    } catch (error) {
        console.error(error)
        return { isSuccess: false, error: '차량 정보를 불러오는데 실패했습니다' }
    }
}

export const getVehicleInfo = async (vehicleNumber: string): Promise<Result<VehicleLocation>> => {
    const validation = validateVehicleNumber(vehicleNumber)

    if (!validation.isValid) {
        return { isSuccess: false, error: validation.message! }
    }

    const result = await vehicleService.getVehicleInfo(vehicleNumber)

    if (!result.isValid || typeof result.value === 'string') {
        return { isSuccess: false, error: result.value as string }
    }

    const vehicleInfo = result.value

    return {
        isSuccess: true,
        data: vehicleInfo,
    }
}
