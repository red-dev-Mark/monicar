import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk'

import { MARKER_IMAGE } from '@/constants/map'
import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { VehicleLocation } from '@/types/vehicle'

import * as styles from './styles.css'

interface VehicleMarkerProps {
    vehicleInfo: VehicleLocation
    isVehicleNumberVisible?: boolean
    onClick?: () => void
}

const VehicleMarker = ({ vehicleInfo, isVehicleNumberVisible = true, onClick }: VehicleMarkerProps) => {
    const vehicleNumber = addSpaceVehicleNumber(vehicleInfo.vehicleNumber)

    return (
        <CustomOverlayMap position={vehicleInfo.coordinate}>
            {isVehicleNumberVisible && <p className={styles.vehicleCard}>{vehicleNumber}</p>}
            <MapMarker position={vehicleInfo.coordinate} image={MARKER_IMAGE} onClick={onClick} />
        </CustomOverlayMap>
    )
}

export default VehicleMarker
