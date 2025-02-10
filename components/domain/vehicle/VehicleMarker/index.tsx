import { useState } from 'react'
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk'

import { MARKER_IMAGE } from '@/constants/map'
import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { VehicleLocation } from '@/types/vehicle'

import * as styles from './styles.css'

interface VehicleMarkerProps {
    vehicleInfo: VehicleLocation
    useHoverEffect?: boolean
    onClick?: () => void
}

const VehicleMarker = ({ vehicleInfo, useHoverEffect = true, onClick }: VehicleMarkerProps) => {
    const [isHovered, setIsHovered] = useState(false)

    const shouldShowNumber = useHoverEffect ? isHovered : true
    const vehicleNumber = addSpaceVehicleNumber(vehicleInfo.vehicleNumber)

    return (
        <CustomOverlayMap position={vehicleInfo.coordinate}>
            {shouldShowNumber && (
                <p className={styles.vehicleNumber} onClick={useHoverEffect ? undefined : onClick} role='presentation'>
                    {vehicleNumber}
                </p>
            )}
            <MapMarker
                position={vehicleInfo.coordinate}
                image={MARKER_IMAGE}
                onClick={onClick}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
            />
        </CustomOverlayMap>
    )
}

export default VehicleMarker
