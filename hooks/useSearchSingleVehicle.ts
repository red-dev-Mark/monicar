import { ChangeEventHandler, useEffect, useState } from 'react'

import { ZOOM_LEVEL } from '@/constants/map'
import { useMapControl } from '@/hooks/useMapControl'
import { useModal } from '@/hooks/useModal'
import { validateVehicleNumber } from '@/lib/utils/validation'
import mockData from '@/mock/single_vehicle_search_ok.json'
import { VehicleInfoModel } from '@/types/vehicle'

export const useSearchSingleVehicle = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [isVehicleVisible, setIsVehicleVisible] = useState(false)
    const [vehicleInfo, setVehicleInfo] = useState<VehicleInfoModel>()

    const { isOpen, modalMessage, closeModal, showMessage } = useModal()
    const { mapState, updateMapLocation } = useMapControl()

    useEffect(() => {
        const getSingleVehicleData = () => {
            // TODO: 실제 데이터페칭으로 수정
            const data = mockData.vehicle

            const singleVehicleData = {
                vehicleId: data.vehicleId,
                vehicleNumber: data.vehicleNumber,
                status: data.status,
                location: { lat: data.lat, lng: data.lng },
            }

            setVehicleInfo(singleVehicleData)
        }

        getSingleVehicleData()
    }, [])

    const handleVehicleSearch = () => {
        if (!vehicleInfo) return

        const validation = validateVehicleNumber(searchTerm)

        if (!validation.isValid) {
            showMessage(validation.message!)
            return
        }

        // TODO: API 호출 로직으로 변경하기
        if (validation.value !== mockData.vehicle.vehicleNumber) {
            showMessage('등록되지 않은 차량번호입니다.')
            return
        }

        updateMapLocation(
            {
                lat: vehicleInfo?.location.lat,
                lng: vehicleInfo?.location.lng,
            },
            ZOOM_LEVEL.SINGLE_VEHICLE,
        )

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
