import { useEffect, useState } from 'react'

import { vehicleService } from '@/lib/apis'
import { AutoVehicle } from '@/types/vehicle'

export const useAutoComplete = (inputValue: string) => {
    const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false)
    const [autoCompleteList, setAutoCompleteList] = useState<AutoVehicle[]>([])

    useEffect(() => {
        const abortController = new AbortController()

        const getVehicleList = async () => {
            if (!inputValue) {
                setIsAutoCompleteVisible(false)
                setAutoCompleteList([])
                return
            }

            const response = await vehicleService.getVehicleAutocomplete(inputValue, abortController.signal)

            setIsAutoCompleteVisible(true)
            setAutoCompleteList(response.value.length === 0 ? [] : response.value)
        }

        getVehicleList()

        return () => {
            abortController.abort()
        }
    }, [inputValue])

    const hideAutoComplete = () => {
        setIsAutoCompleteVisible(false)
    }

    return {
        isAutoCompleteVisible,
        autoCompleteList,
        hideAutoComplete,
    }
}
