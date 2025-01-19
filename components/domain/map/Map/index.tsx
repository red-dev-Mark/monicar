'use client'

import { useEffect } from 'react'
import { Map as KakaoMap } from 'react-kakao-maps-sdk'

import { useKakaoLoader } from '@/hooks/useKakaoLoader'
import { LatLng } from '@/types/location'

interface MapProps {
    center?: LatLng
    zoom?: number
    children?: React.ReactNode
    onLoad?: (isMapLoaded: boolean) => void
}

const Map = ({ center = { lat: 37.5665, lng: 126.978 }, zoom = 10, children, onLoad, ...props }: MapProps) => {
    const { loading, error } = useKakaoLoader()

    useEffect(() => {
        if (!loading && !error) {
            onLoad?.(true)
        }
    }, [loading, error, onLoad])

    if (loading) return <div>지도를 불러오는 중...</div>
    if (error) return <div>지도를 불러오는데 실패했습니다</div>

    return (
        <KakaoMap center={center} level={zoom} style={{ width: '100%', height: '100%' }} {...props}>
            {children}
        </KakaoMap>
    )
}

export default Map
