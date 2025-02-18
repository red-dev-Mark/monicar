import { useSearchParams } from 'next/navigation'

import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { Vehicle } from '@/types/vehicle'

import * as styles from './styles.css'

interface AutoCompleteProps {
    list: Vehicle[]
    onClick: (vehicleNumber: string) => void
}

const AutoComplete = ({ list, onClick }: AutoCompleteProps) => {
    const searchParams = useSearchParams()

    const vehicleNumber = searchParams.get('vehicleNumber')
    const isHidden = list.length === 1 && list[0].vehicleNumber === vehicleNumber

    if (isHidden) return

    return (
        <div className={styles.container}>
            {list.map((item: Vehicle) => {
                return (
                    <div
                        key={item.vehicleId}
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
