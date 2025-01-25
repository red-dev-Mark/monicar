import { ChangeEventHandler, useState } from 'react'

import { ZOOM_LEVEL } from '@/constants/map'
import { useMapControl } from '@/hooks/useMapControl'
import { useModal } from '@/hooks/useModal'
import { vehicleAPI } from '@/lib/apis'
import { validateVehicleNumber } from '@/lib/utils/validation'
import { VehicleInfoModel } from '@/types/vehicle'

export const useSearchSingleVehicle = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [isVehicleVisible, setIsVehicleVisible] = useState(false)
    const [vehicleInfo, setVehicleInfo] = useState<VehicleInfoModel>()

    const { isOpen, modalMessage, closeModal, showMessage } = useModal()
    const { mapState, updateMapLocation } = useMapControl()

    const handleVehicleSearch = async () => {
        if (!searchTerm) return

        const validation = validateVehicleNumber(searchTerm)

        if (!validation.isValid) {
            showMessage(validation.message!)
            return
        }

        const response = await vehicleAPI.getVehicleInfo(searchTerm)

        console.log(response)

        // TODO: 등록되지 않은 차량의 경우 어떤 에러코드가 오는지 확인 후 처리
        if (!response.isValid) {
            showMessage(response.value)
            return
        }

        const vehicleInfo = response.value

        updateMapLocation(
            {
                lat: vehicleInfo?.recentCycleInfo.lat,
                lng: vehicleInfo?.recentCycleInfo.lng,
            },
            ZOOM_LEVEL.SINGLE_VEHICLE,
        )

        setVehicleInfo(vehicleInfo)
        setIsVehicleVisible(true)
        setSearchTerm('')
    }

    const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearchTerm(event.target.value)
    }

    return {
        vehicleInfo,
        mapState,
        isVehicleVisible,
        searchTerm,
        modalMessage,
        isOpen,
        handleVehicleSearch,
        handleSearchChange,
        closeModal,
    }
}
