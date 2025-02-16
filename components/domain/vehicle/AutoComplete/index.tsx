import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { AutoVehicle } from '@/types/vehicle'

import * as styles from './styles.css'

interface AutoCompleteProps {
    list: AutoVehicle[]
    onClick: (vehicleNumber: string) => void
}

const AutoComplete = ({ list, onClick }: AutoCompleteProps) => {
    return (
        <div className={styles.container}>
            {list.map((item: AutoVehicle) => {
                return (
                    <div
                        key={item.id}
                        className={styles.item}
                        onClick={() => onClick(item.vehicleNumber)}
                        role='presentation'
                    >
                        <p className={styles.vehicleNumber}>{addSpaceVehicleNumber(item.vehicleNumber)}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default AutoComplete
