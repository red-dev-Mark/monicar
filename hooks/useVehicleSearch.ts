import { useState } from 'react'

import { vehicleService } from '@/lib/apis'
import { validateVehicleNumber } from '@/lib/utils/validation'
import { Result } from '@/types/apis/common'
import { Vehicle } from '@/types/vehicle'

export const useVehicleSearch = () => {
    const [searchableDates, setSearchableDates] = useState({ firstDateAt: '', lastDateAt: '' })

    const searchVehicle = async (vehicleNumber: string): Promise<Result<Vehicle>> => {
        const validation = validateVehicleNumber(vehicleNumber)
        if (!validation.isValid) {
            return { isSuccess: false, error: validation.message! }
        }

        try {
            const response = await vehicleService.getVehicleOperationHistory(vehicleNumber)
            if (!response.isValid) {
                // TODO 문구 수정
                return { isSuccess: false, error: '차량 정보를 불러오는데 실패했습니다' }
            }

            if (typeof response.value !== 'string') {
                const vehicleInfo = {
                    vehicleId: response.value.vehicleId as string,
                    vehicleNumber: response.value.vehicleNumber as string,
                }

                setSearchableDates(response.value.operationPeriod)
                return { isSuccess: true, data: vehicleInfo }
            }

            return { isSuccess: true }
        } catch (error) {
            console.error(error)
            return { isSuccess: false, error: '차량 정보를 불러오는데 실패했습니다' }
        }
    }

    return {
        searchableDates,
        searchVehicle,
    }
}
