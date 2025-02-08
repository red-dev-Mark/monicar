import { useState } from 'react'

import { INITIAL_MAP_STATE } from '@/constants/map'
import { LatLng, MapState } from '@/types/map'

export const useMapControl = () => {
    const [mapState, setMapState] = useState<MapState>(INITIAL_MAP_STATE)

    const updateMapLocation = (
        location: LatLng = INITIAL_MAP_STATE.center,
        level: number = INITIAL_MAP_STATE.level,
    ) => {
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
