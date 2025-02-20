import Image from 'next/image'
import { CustomOverlayMap } from 'react-kakao-maps-sdk'

import { LIVE_IMAGE } from '@/constants/map'
import { Route } from '@/types/route'

interface LiveMarkerProps {
    route: Route
}

export const LiveMarker = ({ route }: LiveMarkerProps) => {
    return (
        <CustomOverlayMap
            position={{
                lat: route.lat,
                lng: route.lng,
            }}
        >
            <div
                style={{
                    width: `${LIVE_IMAGE.size.width}px`,
                    height: `${LIVE_IMAGE.size.height}px`,
                    transform: `translate(-50%, -50%) rotate(${route.ang}deg)`,
                }}
            >
                <Image src={LIVE_IMAGE.src} alt='실시간 차량 이미지' width={24} height={24} priority />
            </div>
        </CustomOverlayMap>
    )
}
