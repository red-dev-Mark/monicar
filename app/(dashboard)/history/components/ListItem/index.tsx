import { RightIcon } from '@/public/icons'
import { ListItemModel } from '@/types/history'

import * as styles from './styles.css'

interface ListItemProps {
    data: ListItemModel
}

const ListItem = ({ data }: ListItemProps) => {
    const {
        vehicleNumber,
        department,
        name,
        drivingDays,
        averageDrivingDistance,
        averageDrivingTime,
        totalDrivingDistance,
        drivingRate,
    } = data

    return (
        <div className={styles.container}>
            <div className={styles.itemWrapper}>{vehicleNumber}</div>
            <span className={styles.itemWrapper}>{department}</span>
            <span className={styles.itemWrapper}>{name}</span>
            <span className={styles.itemWrapper}>{drivingDays}일</span>
            <span className={styles.itemWrapper}>{averageDrivingDistance}km</span>
            <span className={styles.itemWrapper}>{averageDrivingTime}분</span>
            <span className={styles.itemWrapper}>{totalDrivingDistance}km</span>
            <span className={styles.itemWrapper}>{drivingRate}%</span>
            <div className={styles.icon}>
                <RightIcon />
            </div>
        </div>
    )
}

export default ListItem
