import Badge from '@/components/common/Badge'
import { OPERATION_STATUS } from '@/components/common/Badge/constants'
import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { RightIcon } from '@/public/icons'
import { LogListItemModel } from '@/types/log'

import * as styles from './styles.css'

interface LogListItemProps {
    data: LogListItemModel
    onClick?: () => void
}

const LogListItem = ({ data, onClick }: LogListItemProps) => {
    const { vehicleNumber, vehicleModel, drivingDays, totalDistance, status } = data
    const formattedVehicleNumber = addSpaceVehicleNumber(vehicleNumber)

    return (
        <button className={styles.container} onClick={onClick} type='button'>
            <ul className={styles.list}>
                <li className={styles.itemWrapper}>{formattedVehicleNumber}</li>
                <li className={styles.itemWrapper}>{vehicleModel}</li>
                <li className={styles.itemWrapper}>{drivingDays.toLocaleString('ko-KR')}일</li>

                <li className={styles.itemWrapper}>{totalDistance.toLocaleString('ko-KR')}km</li>
                <li className={styles.badge}>
                    <Badge shape={'rectangle'} variant={OPERATION_STATUS[status]} />
                </li>
            </ul>
            <div className={styles.icon}>
                <RightIcon />
            </div>
        </button>
    )
}

export default LogListItem
