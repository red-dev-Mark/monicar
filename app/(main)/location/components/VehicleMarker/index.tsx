import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk'

import { MARKER_IMAGE } from '@/constants/map'
import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { VehicleLocation } from '@/types/vehicle'

import * as styles from './styles.css'

interface VehicleMarkerProps {
    vehicleInfo: VehicleLocation
    onClick?: () => void
}

const VehicleMarker = ({ vehicleInfo, onClick }: VehicleMarkerProps) => {
    const vehicleNumber = addSpaceVehicleNumber(vehicleInfo.vehicleNumber)

    return (
        <CustomOverlayMap position={vehicleInfo.coordinate}>
            <div onClick={onClick} role='presentation'>
                <p className={styles.vehicleCard}>{vehicleNumber}</p>
                <MapMarker position={vehicleInfo.coordinate} image={MARKER_IMAGE} />
            </div>
        </CustomOverlayMap>
    )
}

export default VehicleMarker
