import { useState } from 'react'

import { INITIAL_MAP_STATE } from '@/constants/map'
import { getBoundedMapStatus } from '@/lib/utils/map'
import { MapState } from '@/types/map'

interface UseMapStatusProps {
    isMapLoaded: boolean
    map: kakao.maps.Map | null
}

export const useMapStatus = ({ isMapLoaded, map }: UseMapStatusProps) => {
    const [currentMapState, setCurrentMapState] = useState<MapState>({
        level: 7,
        center: INITIAL_MAP_STATE.center,
        swCoord: null,
        neCoord: null,
    })

    const updateMapStatus = () => {
        if (!isMapLoaded || !map) return
        // setCurrentMapState(getCurrentMapStatus(map))
        setCurrentMapState(getBoundedMapStatus(map))
    }

    return { currentMapState, updateMapStatus }
}
