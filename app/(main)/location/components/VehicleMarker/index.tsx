import { MouseEvent, useState } from 'react'
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk'

import { MARKER_IMAGE } from '@/constants/map'
import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { VehicleLocation } from '@/types/vehicle'

import * as styles from './styles.css'

interface VehicleMarkerProps {
    vehicleInfo: VehicleLocation
    isVehicleNumberVisible?: boolean
    useHoverEffect?: boolean
    onClick?: () => void
    onClose?: () => void
}

const VehicleMarker = ({
    vehicleInfo,
    isVehicleNumberVisible = true,
    useHoverEffect = true,
    onClick,
    onClose,
}: VehicleMarkerProps) => {
    const [isHovered, setIsHovered] = useState(false)
    const vehicleNumber = addSpaceVehicleNumber(vehicleInfo.vehicleNumber)

    const handleCloseButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        onClose?.()
    }

    const shouldShowNumber = useHoverEffect ? isHovered : true

    return (
        <CustomOverlayMap position={vehicleInfo.coordinate}>
            {shouldShowNumber && isVehicleNumberVisible && (
                <p className={styles.vehicleCard}>
                    {vehicleNumber}
                    {!useHoverEffect && (
                        <button className={styles.closeButton} onClick={handleCloseButtonClick} aria-label='닫기'>
                            X
                        </button>
                    )}
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
