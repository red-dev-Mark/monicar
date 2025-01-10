import { useState } from 'react'

import { INITIAL_MAP_STATE } from '@/constants/map'
import { LatLng } from '@/types/location'

export const useMapControl = () => {
    const [mapState, setMapState] = useState(INITIAL_MAP_STATE)

    const updateMapLocation = (location: LatLng, level: number) => {
        setMapState({
            center: location,
            level,
        })
    }

    return {
        mapState,
        updateMapLocation,
    }
}
