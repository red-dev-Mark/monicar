import { useState } from 'react'
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk'

import { MARKER_IMAGE } from '@/constants/map'
import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { useVehicleVisibleStore } from '@/stores/useVehicleVisibleStore'
import { VehicleLocation } from '@/types/vehicle'

import * as styles from './styles.css'

interface VehicleMarkerProps {
    vehicleInfo: VehicleLocation
    useHoverEffect?: boolean
    onClick?: (vehicleId: string, vehicleNumber: string) => void
}

const VehicleMarker = ({ vehicleInfo, useHoverEffect = true, onClick }: VehicleMarkerProps) => {
    const [isHovered, setIsHovered] = useState(false)

    const selectedVehicleId = useVehicleVisibleStore((state) => state.selectedVehicleId)

    const isSelected = selectedVehicleId === vehicleInfo.vehicleId
    const shouldShowNumber = isSelected ? true : useHoverEffect ? isHovered : true
    const vehicleNumber = addSpaceVehicleNumber(vehicleInfo.vehicleNumber)

    return (
        <CustomOverlayMap position={vehicleInfo.coordinate}>
            {shouldShowNumber && (
                <p className={styles.vehicleNumber} role='presentation'>
                    {vehicleNumber}
                </p>
            )}
            <MapMarker
                position={vehicleInfo.coordinate}
                image={MARKER_IMAGE}
                onClick={() => onClick?.(vehicleInfo.vehicleId, vehicleInfo.vehicleNumber)}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
            />
        </CustomOverlayMap>
    )
}

export default VehicleMarker
