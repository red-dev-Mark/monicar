import { useEffect, useState } from 'react'

import { convertCoordsToAddress } from '@/lib/utils/map'

const addressCache = new Map()

export const useCoordToAddress = (lat: number, lng: number) => {
    const [address, setAddress] = useState('')

    useEffect(() => {
        const cacheKey = `${lat}${lng}`

        if (addressCache.has(cacheKey)) {
            const address = addressCache.get(cacheKey)
            setAddress(address)
            return
        }

        const getAddressFromCoords = async () => {
            const address = await convertCoordsToAddress(lat, lng)

            addressCache.set(cacheKey, address)
            setAddress(address)
        }

        getAddressFromCoords()
    }, [lat, lng])

    return address
}
