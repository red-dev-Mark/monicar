import { useState } from 'react'

import { vehicleService } from '@/lib/apis'
import { validateVehicleNumber } from '@/lib/utils/validation'
import { VehicleOperationHistory } from '@/types/vehicle'

interface Result<T> {
    isSuccess: boolean
    data?: T
    error?: string
}

export const useSearchVehicle = (vehicleNumber: string = '') => {
    const [searchedVehicle, setSearchedVehicle] = useState<VehicleOperationHistory | null>()
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
                return { isSuccess: false, error: '등록되지 않은 차량번호입니다.' }
            }

            const vehicleOperationHistory = {
                vehicleId: response.value.vehicleId,
                vehicleNumber: response.value.vehicleNumber,
                operationPeriod: {
                    firstDateAt: response.value.firstDateAt,
                    lastDateAt: response.value.lastDateAt,
                },
            }

            setSearchedVehicle(vehicleOperationHistory)
            setSearchableDates(vehicleOperationHistory.operationPeriod)

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
        setSearchableDates,
    }
}
