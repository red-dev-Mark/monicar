'use client'

import { memo } from 'react'
import { Map as KakaoMap, ZoomControl } from 'react-kakao-maps-sdk'

import { useKakaoLoader } from '@/hooks/useKakaoLoader'
import { LatLng } from '@/types/location'

interface MapProps {
    ref?: React.RefObject<kakao.maps.Map>
    center?: LatLng
    zoom?: number
    children?: React.ReactNode
    onLoad?: (isMapLoaded: boolean) => void
    onZoomChanged?: () => void
}

const Map = memo(
    ({ ref, center = { lat: 37.5665, lng: 126.978 }, zoom = 10, children, onLoad, onZoomChanged }: MapProps) => {
        const { loading, error } = useKakaoLoader()

        const handleCreate = () => {
            onLoad?.(true)
        }

        const handleZoomChanged = () => {
            onZoomChanged?.()
        }

        if (loading) return <div>지도를 불러오는 중...</div>
        if (error) return <div>지도를 불러오는데 실패했습니다</div>

        return (
            <KakaoMap
                ref={ref}
                center={center}
                level={zoom}
                style={{ width: '100%', height: '100%' }}
                onZoomChanged={handleZoomChanged}
                onCreate={handleCreate}
            >
                {children}
                <ZoomControl />
            </KakaoMap>
        )
    },
)

Map.displayName = 'Map'

export default Map
