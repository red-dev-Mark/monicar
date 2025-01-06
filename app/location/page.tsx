'use client'

import { Map } from 'react-kakao-maps-sdk'

import { useKakaoLoader } from '@/hooks/useKakaoLoader'

const LocationPage = () => {
    const { loading, error } = useKakaoLoader()

    if (loading) return <div>지도를 불러오는 중...</div>
    if (error) return <div>지도를 불러오는데 실패했습니다</div>

    return <Map center={{ lat: 37.5665, lng: 126.978 }} style={{ width: '100%', height: '100vh' }} level={3} />
}

export default LocationPage
