import { useState } from 'react'

import { useModal } from '@/hooks/useModal'
import { vehicleAPI } from '@/lib/apis'
import { validateVehicleNumber } from '@/lib/utils/validation'
import { VehicleDateModel } from '@/types/vehicle'

export const useSearchVehicle = (vehicleNumber: string = '') => {
    const [searchedVehicle, setSearchedVehicle] = useState<VehicleDateModel>()
    const [searchableDates, setSearchableDates] = useState({ firstDateAt: '', lastDateAt: '' })

    const { isOpen, modalMessage, closeModal, showMessage } = useModal()

    const searchVehicle = async () => {
        const validation = validateVehicleNumber(vehicleNumber)

        if (!validation.isValid) {
            showMessage(validation.message!)
            return
        }

        try {
            const response = await vehicleAPI.fetchVehicleData(vehicleNumber)

            // TODO: 등록되지 않는 차량 API 에러 메세지로 대체
            if (validation.value !== response.vehicleNumber) {
                showMessage('등록되지 않은 차량번호입니다.')
                return
            }

            const vehicleData = {
                vehicleId: response.vehicleId,
                vehicleNumber: response.vehicleNumber,
                searchableDates: {
                    firstDateAt: response.firstDateAt,
                    lastDateAt: response.lastDateAt,
                },
            }

            setSearchedVehicle(vehicleData)
            setSearchableDates(vehicleData.searchableDates)
        } catch (error) {
            console.error(error)
            showMessage('차량 정보를 불러오는데 실패했습니다')
        }
    }

    return {
        searchedVehicle,
        searchableDates,
        isOpen,
        modalMessage,
        searchVehicle,
        closeModal,
    }
}
