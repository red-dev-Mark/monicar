import { useState } from 'react'

import { MAP_CONFIG } from '@/constants/map'
import { getBoundedMapStatus } from '@/lib/utils/map'
import { LatLng, MapState } from '@/types/map'

export const useMapStatus = (map: kakao.maps.Map | null | undefined) => {
    const [mapState, setCurrentMapState] = useState<MapState>({
        level: MAP_CONFIG.INIT.level,
        center: MAP_CONFIG.INIT.center,
        swCoord: null,
        neCoord: null,
    })

    const updateMapStatus = () => {
        if (!map) return

        setCurrentMapState(getBoundedMapStatus(map))
    }

    const controlMapStatus = (location: LatLng, level?: number) => {
        if (!map) {
            console.warn('카카오맵 인스턴스 생성에 실패하였습니다.')
            return
        }

        try {
            map.setCenter(new kakao.maps.LatLng(location.lat, location.lng))
            if (level) {
                map.setLevel(level)
            }

            setCurrentMapState(getBoundedMapStatus(map))
        } catch (error) {
            console.error('지도상태 변경 실패', error)
        }
    }

    return { mapState, updateMapStatus, controlMapStatus }
}
