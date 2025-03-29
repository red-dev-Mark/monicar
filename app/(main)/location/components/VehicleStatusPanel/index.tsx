import VehicleStatusItem from '@/app/(main)/location/components/VehicleStatusItem'
import { useVehicleStatus } from '@/hooks/queries/useVehicle'
import { getVehicleCount } from '@/lib/utils/vehicle'
import { vars } from '@/styles/theme.css'

import * as styles from './styles.css'

const VehicleStatusPanel = () => {
    const { data: vehicleStatus, error, isLoading } = useVehicleStatus()

    const { allVehicles, engineOnVehicles, engineOffVehicles } = getVehicleCount(isLoading, vehicleStatus)

    if (isLoading) return
    if (error) return

    return (
        <div className={styles.container}>
            <VehicleStatusItem total={allVehicles} current={allVehicles} color={vars.colors.primary}>
                전체 차량
            </VehicleStatusItem>

            <VehicleStatusItem total={allVehicles} current={engineOnVehicles} color={vars.colors.green[500]}>
                운행중 차량
            </VehicleStatusItem>

            <VehicleStatusItem total={allVehicles} current={engineOffVehicles} color={vars.colors.blue}>
                미운행 차량
            </VehicleStatusItem>
        </div>
    )
}

export default VehicleStatusPanel
