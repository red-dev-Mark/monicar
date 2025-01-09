import { VehicleHistoryModel } from '@/types/history'

import * as styles from './styles.css'

interface HistoryItemProps {
    data: VehicleHistoryModel
}

const ListItem = ({ data }: HistoryItemProps) => {
    const {
        vehicleNumber,
        department,
        name,
        drivingDays,
        averageDrivingDistance,
        averageDrivingTime,
        totalDrivingDistance,
        drivingRate,
        icon,
    } = data

    return (
        <div className={styles.itemWrapper}>
            <span className={styles.itemContent}>{vehicleNumber}</span>
            <span className={styles.itemContent}>{department}</span>
            <span className={styles.itemContent}>{name}</span>
            <span className={styles.itemContent}>{drivingDays}일</span>
            <span className={styles.itemContent}>{averageDrivingDistance}km</span>
            <span className={styles.itemContent}>{averageDrivingTime}분</span>
            <span className={styles.itemContent}>{totalDrivingDistance}km</span>
            <span className={styles.itemContent}>{drivingRate}%</span>
            <div className={styles.icon}>{icon}</div>
        </div>
    )
}

export default ListItem
