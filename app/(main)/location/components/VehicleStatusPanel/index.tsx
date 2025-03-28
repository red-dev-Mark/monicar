import VehicleStatusItem from '@/app/(main)/location/components/VehicleStatusItem'
import { useVehicleStatus } from '@/hooks/queries/useVehicle'
import { vars } from '@/styles/theme.css'

import * as styles from './styles.css'

const VehicleStatusPanel = () => {
    const { data: vehicleStatus, error, isLoading } = useVehicleStatus()

    if (isLoading) return
    if (error) return
    if (!vehicleStatus) return

    return (
        <div className={styles.container}>
            <VehicleStatusItem
                total={vehicleStatus?.allVehicles}
                current={vehicleStatus?.allVehicles}
                color={vars.colors.primary}
            >
                전체 차량
            </VehicleStatusItem>

            <VehicleStatusItem
                total={vehicleStatus?.allVehicles}
                current={vehicleStatus.engineOnVehicles}
                color={vars.colors.green[500]}
            >
                운행중 차량
            </VehicleStatusItem>

            <VehicleStatusItem
                total={vehicleStatus?.allVehicles}
                current={vehicleStatus.engineOffVehicles}
                color={vars.colors.blue}
            >
                미운행 차량
            </VehicleStatusItem>
        </div>
    )
}

export default VehicleStatusPanel
