import { useState } from 'react'

import { MAP_CONFIG } from '@/constants/map'
import { LatLng, MapState } from '@/types/map'

export const useMapControl = () => {
    const [mapState, setMapState] = useState<MapState>(MAP_CONFIG.INIT)

    const updateMapLocation = (location: LatLng = MAP_CONFIG.INIT.center, level: number = MAP_CONFIG.INIT.level) => {
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
