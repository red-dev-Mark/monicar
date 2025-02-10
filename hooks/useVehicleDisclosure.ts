import { useRouter, useSearchParams } from 'next/navigation'

import { vehicleService } from '@/lib/apis'
import { removeSpaces, trimValue } from '@/lib/utils/string'
import { cleanUrlParams } from '@/lib/utils/url'
import { useVehicleVisibleStore } from '@/stores/useVehicleVisibleStore'

export const useVehicleDisclosure = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const {
        isSelectedVehicleVisible,
        isSearchedVehicleVisible,
        setSelectedVehicleVisible,
        setSearchedVehicleVisible,
        setSelectVehicleId,
        setInputValue,
    } = useVehicleVisibleStore()

    const showSearchedVehicle = (vehicleNumber: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('vehicleNumber', removeSpaces(trimValue(vehicleNumber)))
        router.replace(`/location?${params.toString()}`)

        setSearchedVehicleVisible(true)
    }

    const hideSearchedVehicle = () => {
        cleanUrlParams()
        setSearchedVehicleVisible(false)
    }

    const showSelectedVehicle = () => {
        setSelectedVehicleVisible(true)
    }

    const hideSelectedVehicle = () => {
        cleanUrlParams()
        setInputValue('')
        setSelectedVehicleVisible(false)
    }

    const selectVehicle = async (vehicleId: string | null, vehicleNumber: string) => {
        if (!vehicleId) return

        const vehicleDetail = await vehicleService.getVehicleDetail(vehicleId)

        hideSearchedVehicle()

        const params = new URLSearchParams(searchParams)
        params.set('vehicleNumber', removeSpaces(trimValue(vehicleNumber)))
        router.replace(`/location?${params.toString()}`)

        setInputValue(vehicleNumber)
        setSelectVehicleId(vehicleId)

        return vehicleDetail
    }

    const unselectVehicle = () => {
        setSelectVehicleId(null)
    }

    return {
        isSelectedVehicleVisible,
        isSearchedVehicleVisible,
        showSearchedVehicle,
        hideSearchedVehicle,
        showSelectedVehicle,
        hideSelectedVehicle,
        selectVehicle,
        unselectVehicle,
    }
}
