'use client'

import { Map as KakaoMap } from 'react-kakao-maps-sdk'

import { useKakaoLoader } from '@/hooks/useKakaoLoader'

const Map = () => {
    const { loading, error } = useKakaoLoader()

    if (loading) return <div>지도를 불러오는 중...</div>
    if (error) return <div>지도를 불러오는데 실패했습니다</div>

    return <KakaoMap center={{ lat: 37.5665, lng: 126.978 }} style={{ width: '100%', height: '100%' }} level={10} />
}

export default Map
