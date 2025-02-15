import { useEffect, useState } from 'react'

import { convertCoordsToAddress } from '@/lib/utils/map'

const addressCache = new Map()

export const useCoordToAddress = (lat: number, lng: number, onError?: (message: string) => void) => {
    const [address, setAddress] = useState('')

    useEffect(() => {
        const cacheKey = `${lat}-${lng}`

        if (addressCache.has(cacheKey)) {
            const address = addressCache.get(cacheKey)
            setAddress(address)
            return
        }

        const getAddressFromCoords = async () => {
            try {
                const address = await convertCoordsToAddress(lat, lng)
                addressCache.set(cacheKey, address)
                setAddress(address)
            } catch (error) {
                console.error(error)
                onError?.('현재 위치가 서비스 지역을 벗어났습니다')
            }
        }
        getAddressFromCoords()
    }, [lat, lng])

    return address
}
