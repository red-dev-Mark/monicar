import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk'

import { MARKER_IMAGE } from '@/constants/map'
import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { VehicleLocation } from '@/types/vehicle'

import * as styles from './styles.css'

interface VehicleMarkerProps {
    vehicleInfo: VehicleLocation
    markerSize?: 'sm' | 'lg'
    onClick?: (vehicleNumber: string) => void
}

const VehicleMarker = ({ vehicleInfo, markerSize = 'lg', onClick }: VehicleMarkerProps) => {
    const [isHovered, setIsHovered] = useState(false)

    const searchParams = useSearchParams()

    const vehicleNumberInQuery = searchParams.get('vehicleNumber')

    const isSelected = vehicleNumberInQuery === String(vehicleInfo.vehicleNumber)
    const isVehicleNumberVisible = isSelected ? true : isHovered
    const vehicleNumber = addSpaceVehicleNumber(vehicleInfo.vehicleNumber)

    return (
        <CustomOverlayMap position={vehicleInfo.coordinate}>
            {isVehicleNumberVisible && (
                <p className={styles.vehicleNumber({ size: markerSize })} role='presentation'>
                    {vehicleNumber}
                </p>
            )}
            <MapMarker
                position={vehicleInfo.coordinate}
                image={MARKER_IMAGE(markerSize)}
                onClick={() => onClick?.(vehicleInfo.vehicleNumber)}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
            />
        </CustomOverlayMap>
    )
}

export default VehicleMarker
