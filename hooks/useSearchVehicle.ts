import { useState } from 'react'

import { useModal } from '@/hooks/useModal'
import { vehicleAPI } from '@/lib/apis'
import { validateVehicleNumber } from '@/lib/validation'
import { vehicleDateModel } from '@/types/vehicle'

export const useSearchVehicle = (vehicleNumber: string = '') => {
    const [vehicleData, setVehicleData] = useState<vehicleDateModel>()
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
            if (response.vehicleNumber !== vehicleNumber) {
                showMessage('등록되지 않은 차량번호입니다.')
                return
            }

            const vehicleData = {
                vehicleId: response.vehicleId,
                vehicleNumber: response.vehicleNumber,
                searchableDate: {
                    firstDateAt: response.firstDateAt,
                    lastDateAt: response.lastDateAt,
                },
            }

            setVehicleData(vehicleData)
        } catch (error) {
            console.error(error)
            showMessage('차량 정보를 불러오는데 실패했습니다')
        }
    }

    return {
        searchVehicle,
        vehicleData,
        isOpen,
        modalMessage,
        closeModal,
    }
}
