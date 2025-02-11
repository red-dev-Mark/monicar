import { useState } from 'react'

import { vehicleService } from '@/lib/apis'
import { validateVehicleNumber } from '@/lib/utils/validation'
import { Result } from '@/types/apis/common'
import { Vehicle } from '@/types/vehicle'

export const useSearchVehicle = (vehicleNumber: string = '') => {
    const [searchedVehicle, setSearchedVehicle] = useState<Vehicle | null>()
    const [searchableDates, setSearchableDates] = useState({ firstDateAt: '', lastDateAt: '' })

    const searchVehicle = async (): Promise<Result<void>> => {
        const validation = validateVehicleNumber(vehicleNumber)
        if (!validation.isValid) {
            return { isSuccess: false, error: validation.message! }
        }

        try {
            const response = await vehicleService.getVehicleOperationHistory(vehicleNumber)
            if (!response.isValid) {
                setSearchedVehicle(null)
                // TODO 문구 수정
                return { isSuccess: false, error: '차량 정보를 불러오는데 실패했습니다' }
            }

            if (typeof response.value !== 'string') {
                const vehicleInfo = {
                    vehicleId: response.value.vehicleId as string,
                    vehicleNumber: response.value.vehicleNumber as string,
                }
                setSearchedVehicle(vehicleInfo)
                setSearchableDates(response.value.operationPeriod)
            }

            return { isSuccess: true }
        } catch (error) {
            console.error(error)
            return { isSuccess: false, error: '차량 정보를 불러오는데 실패했습니다' }
        }
    }

    return {
        searchedVehicle,
        searchableDates,
        searchVehicle,
    }
}
