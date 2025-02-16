import { useRouter, useSearchParams } from 'next/navigation'

import { useQueryParams } from '@/hooks/useQueryParams'
import { vehicleService } from '@/lib/apis'
import { removeSpaces, trimValue } from '@/lib/utils/string'
import { useVehicleVisibleStore } from '@/stores/useVehicleVisibleStore'

export const useVehicleDisclosure = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const { removeQuery } = useQueryParams()

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
        removeQuery('vehicleName')
        setSearchedVehicleVisible(false)
    }

    const showSelectedVehicle = () => {
        setSelectedVehicleVisible(true)
    }

    const hideSelectedVehicle = () => {
        removeQuery('vehicleName')
        setInputValue('')
        setSelectVehicleId(null)
        setSelectedVehicleVisible(false)
    }

    const selectVehicle = async (vehicleId: string | null, vehicleNumber: string) => {
        if (!vehicleId) return

        const vehicleDetailResult = await vehicleService.getVehicleDetail(vehicleId)
        if (!vehicleDetailResult.isSuccess) throw new Error(vehicleDetailResult.error)

        hideSearchedVehicle()

        const params = new URLSearchParams(searchParams)
        params.set('vehicleNumber', removeSpaces(trimValue(vehicleNumber)))
        router.replace(`/location?${params.toString()}`)

        setInputValue(vehicleNumber)
        setSelectVehicleId(vehicleId)

        return vehicleDetailResult.data
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
