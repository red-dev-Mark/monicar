'use client'

import { memo, useEffect, useRef } from 'react'
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
        center = { lat: 37.5665, lng: 126.978 },
        zoom = 10,
        ref,
        children,
        onLoad,
        onZoomChanged,
        ...props
    }: MapProps) => {
        const { loading, error } = useKakaoLoader()

        const mapRef = useRef<kakao.maps.Map>(null)

        useEffect(() => {
            if (!loading && !error) {
                // console.log('loaded!!')
                onLoad?.(true)
                // console.log(ref)

                // const map = mapRef

                // console.log(map)
            }
        }, [loading, error, ref, onLoad])

        // useEffect(() => {
        //     const getInfo = () => {
        //         if (!!mapRef.current) return
        //         const map = mapRef.current

        //         console.log(map)
        //         // if (!map) return

        //         // 지도의 현재 레벨을 얻어옵니다
        //         // const level = map.getLevel()

        //         // // 지도의 현재 영역을 얻어옵니다
        //         // const bounds = map.getBounds()
        //         // // 영역의 남서쪽 좌표를 얻어옵니다
        //         // const swLatLng = bounds.getSouthWest()
        //         // // 영역의 북동쪽 좌표를 얻어옵니다
        //         // const neLatLng = bounds.getNorthEast()

        //         //   swLatLng.getLat() +
        //         //   swLatLng.getLng() +
        //         //   neLatLng.getLat() +
        //         //   neLatLng.getLng() +
        //         // setInfo(message)

        //         // console.log(level, swLatLng)
        //     }
        //     getInfo()
        // }, [mapRef])

        const handleZoomChanged = (map: kakao.maps.Map) => {
            const currentZoom = map.getLevel()
            onZoomChanged?.(currentZoom)
        }

        if (loading) return <div>지도를 불러오는 중...</div>
        if (error) return <div>지도를 불러오는데 실패했습니다</div>

        return (
            <KakaoMap
                ref={mapRef}
                center={center}
                level={zoom}
                style={{ width: '100%', height: '100%' }}
                onZoomChanged={handleZoomChanged}
                {...props}
            >
                {children}
            </KakaoMap>
        )
    },
)

Map.displayName = 'Map'

export default Map
