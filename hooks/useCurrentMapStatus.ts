import { useState } from 'react'

import { INITIAL_MAP_STATE } from '@/constants/map'
import { getCurrentMapStatus } from '@/lib/utils/map'
import { MapState } from '@/types/map'

export const useCurrentMapStatus = () => {
    const [currentMapState, setCurrentMapState] = useState<MapState>({
        level: 7,
        center: INITIAL_MAP_STATE.center,
        swCoord: null,
        neCoord: null,
    })

    const handleMapChange = (map: kakao.maps.Map) => {
        const newMapStatus = getCurrentMapStatus(map)
        setCurrentMapState(newMapStatus)
    }

    return { currentMapState, handleMapChange }
}
