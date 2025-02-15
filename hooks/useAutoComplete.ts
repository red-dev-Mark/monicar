import { useEffect, useState } from 'react'

import { vehicleService } from '@/lib/apis'
import { AutoVehicle } from '@/types/vehicle'

export const useAutoComplete = (inputValue: string) => {
    const [autoCompleteList, setAutoCompleteList] = useState<AutoVehicle[]>([])

    useEffect(() => {
        const getVehicleList = async () => {
            const response = await vehicleService.getVehicleAutocomplete(inputValue)
            console.log(response.value.length === 0, !inputValue)
            setAutoCompleteList(response.value.length === 0 && !inputValue ? [] : response.value)
        }

        getVehicleList()
    }, [inputValue])

    return {
        autoCompleteList,
    }
}
