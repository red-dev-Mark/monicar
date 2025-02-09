import { useState } from 'react'

import { INITIAL_MAP_STATE } from '@/constants/map'
import { getBoundedMapStatus } from '@/lib/utils/map'
import { LatLng, MapState } from '@/types/map'

export const useMapStatus = (map: kakao.maps.Map | null) => {
    const [currentMapState, setCurrentMapState] = useState<MapState>({
        level: 7,
        center: INITIAL_MAP_STATE.center,
        swCoord: null,
        neCoord: null,
    })

    const updateMapStatus = () => {
        if (!map) return

        setCurrentMapState(getBoundedMapStatus(map))
    }

    const controlMapStatus = (location: LatLng, level: number) => {
        if (!map) return

        map.setLevel(level)
        map.setCenter(new kakao.maps.LatLng(location.lat, location.lng))
        // const bounds = getBoundedMapStatus(map)

        // setCurrentMapState({
        //     ...bounds,
        //     level,
        //     center: location,
        // })
    }

    return { currentMapState, updateMapStatus, controlMapStatus }
}
