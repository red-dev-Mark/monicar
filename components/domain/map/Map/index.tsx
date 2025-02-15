'use client'

import { Map as KakaoMap } from 'react-kakao-maps-sdk'

import ErrorMessage from '@/components/common/ErrorMessage'
import { MAP_CONFIG } from '@/constants/map'
import { useKakaoLoader } from '@/hooks/useKakaoLoader'
import { LatLng, MapRefType } from '@/types/map'

import MapSkeleton from '../MapSkeleton'

interface MapProps {
    ref?: MapRefType
    level?: number
    center?: LatLng
    children?: React.ReactNode
    onLoad?: (isMapLoaded: boolean) => void
    onClick?: () => void
    onMapStatusChanged?: () => void
}

const Map = ({
    ref,
    level = MAP_CONFIG.INIT.level,
    center = MAP_CONFIG.INIT.center,
    children,
    onLoad,
    onClick,
    onMapStatusChanged,
}: MapProps) => {
    const { loading, error } = useKakaoLoader()

    const handleCreate = () => {
        onLoad?.(true)
    }

    const handleMapStatusChange = () => {
        onMapStatusChanged?.()
    }

    if (loading) return <MapSkeleton />
    if (error) return <ErrorMessage />

    return (
        <KakaoMap
            ref={ref}
            center={center}
            onClick={onClick}
            level={level}
            maxLevel={MAP_CONFIG.ZOOM.MAX}
            minLevel={MAP_CONFIG.ZOOM.MIN}
            style={{ width: '100%', height: '100%' }}
            onCreate={handleCreate}
            onZoomChanged={handleMapStatusChange}
            onDragEnd={handleMapStatusChange}
        >
            {children}
        </KakaoMap>
    )
}

export default Map
