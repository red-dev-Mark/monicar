import { useState } from 'react'

import { INITIAL_MAP_STATE } from '@/constants/map'
import { getBoundedMapStatus } from '@/lib/utils/map'
import { LatLng, MapState } from '@/types/map'

export const useMapStatus = (map: kakao.maps.Map | null | undefined) => {
    const [mapState, setCurrentMapState] = useState<MapState>({
        level: 7,
        center: INITIAL_MAP_STATE.center,
        swCoord: null,
        neCoord: null,
    })

    const updateMapStatus = () => {
        if (!map) return

        setCurrentMapState(getBoundedMapStatus(map))
    }

    const controlMapStatus = (level: number, location: LatLng) => {
        if (!map) return

        map.setCenter(new kakao.maps.LatLng(location.lat, location.lng))
        map.setLevel(level)

        setCurrentMapState(getBoundedMapStatus(map))
    }

    return { mapState, updateMapStatus, controlMapStatus }
}
