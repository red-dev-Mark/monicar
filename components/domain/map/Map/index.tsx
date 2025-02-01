'use client'

import { memo } from 'react'
import { Map as KakaoMap } from 'react-kakao-maps-sdk'

import { useKakaoLoader } from '@/hooks/useKakaoLoader'
import { LatLng } from '@/types/location'

interface MapProps {
    center?: LatLng
    zoom?: number
    ref?: React.RefObject<kakao.maps.Map>
    children?: React.ReactNode
    onLoad?: (isMapLoaded: boolean) => void
    onZoomChanged?: (level: number) => void
}

const Map = memo(
    ({
        ref,
        center = { lat: 37.5665, lng: 126.978 },
        zoom = 10,
        children,
        onLoad,
        onZoomChanged,
        ...props
    }: MapProps) => {
        const { loading, error } = useKakaoLoader()

        const handleCreate = () => {
            console.log('맵 생성 시점:', ref)
            onLoad?.(true)
        }

        // useEffect(() => {
        //     if (!loading && !error) {
        //         console.log('a')
        //         console.log(mapRef)
        //         // console.log('loaded!!')
        //         onLoad?.(true)
        //     }
        // }, [loading, error, mapRef, onLoad])
        // useEffect(() => {
        //     // KakaoMap 컴포넌트의 onLoad 이벤트를 이용s
        //     if (!loading && !error && mapRef.current) {
        //         console.log(mapRef) // 이제 맵 인스턴스가 존재함
        //         onLoad?.(true)
        //     }
        // }, [loading, error, ref, onLoad])

        const handleZoomChanged = (map: kakao.maps.Map) => {
            const currentZoom = map.getLevel()
            onZoomChanged?.(currentZoom)
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
                // onLoad={handleCreate}
                onCreate={handleCreate}
                {...props}
            >
                {children}
            </KakaoMap>
        )
    },
)

Map.displayName = 'Map'

export default Map
