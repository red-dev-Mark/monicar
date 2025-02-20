import { useEffect, useRef, useState } from 'react'

import { vehicleService } from '@/lib/apis'
import { Vehicle } from '@/types/vehicle'

export const useAutoComplete = (inputValue: string) => {
    const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false)
    const [autoCompleteList, setAutoCompleteList] = useState<Vehicle[]>([])
    const timeoutRef = useRef<NodeJS.Timeout>()

    useEffect(() => {
        const abortController = new AbortController()

        const getVehicleList = async () => {
            if (!inputValue) {
                setIsAutoCompleteVisible(false)
                setAutoCompleteList([])
                return
            }

            try {
                const response = await vehicleService.getVehicleAutocomplete(inputValue, abortController.signal)
                setIsAutoCompleteVisible(true)
                setAutoCompleteList(response.value.length === 0 ? [] : response.value)
            } catch (error) {
                console.log('자동완성 응답 전 새로운 요청', error)
                setAutoCompleteList([])
            }
        }

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            getVehicleList()
        }, 300)

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
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
