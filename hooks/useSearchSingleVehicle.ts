import { ChangeEventHandler, useEffect, useState } from 'react'

import { INITIAL_MAP_STATE } from '@/constants/map'
import { useModal } from '@/hooks/useModal'
import { validateVehicleNumber } from '@/lib/validation'
import mockData from '@/mock/single_vehicle_search_ok.json'
import { singleVehicleModel } from '@/types/vehicle'

export const useSearchSingleVehicle = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [modalMessage, setModalMessage] = useState('')
    const [singleVehicle, setSingleVehicle] = useState<singleVehicleModel>()
    const [mapState, setMapState] = useState(INITIAL_MAP_STATE)
    const [showSingleVehicle, setShowSingleVehicle] = useState(false)

    const { isOpen, openModal, closeModal } = useModal()

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

            setSingleVehicle(singleVehicleData)
        }

        getSingleVehicleData()
    }, [])

    const searchSingleVehicle = () => {
        if (!singleVehicle) return

        const validation = validateVehicleNumber(searchTerm)

        if (!validation.isValid) {
            // alert(validation.message)
            setModalMessage(validation.message!)
            openModal()
            return
        }

        // TODO: API 호출 로직으로 변경하기
        if (validation.value !== mockData.vehicle.vehicleNumber) {
            // alert('등록되지 않은 차량번호입니다.')
            setModalMessage('등록되지 않은 차량번호입니다.')
            openModal()
            return
        }

        setMapState({
            center: {
                lat: singleVehicle?.location.lat,
                lng: singleVehicle?.location.lng,
            },
            level: 7,
        })

        setShowSingleVehicle(true)
        setSearchTerm('')
    }

    const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearchTerm(event.target.value)
    }

    return {
        singleVehicle,
        mapState,
        showSingleVehicle,
        searchTerm,
        modalMessage,
        isOpen,
        searchSingleVehicle,
        handleSearchChange,
        closeModal,
    }
}
