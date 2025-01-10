import Badge from '@/components/common/Badge'
import { ListItemModel } from '@/types/log'

import * as styles from './styles.css'

interface ListItemProps {
    data: ListItemModel
}

const ListItem = ({ data }: ListItemProps) => {
    const { vehicleNumber, vehicleModel, status, icon } = data

    return (
        <div className={styles.itemWrapper}>
            <span className={styles.itemContent}>{vehicleNumber}</span>
            <span className={styles.itemContent}>{vehicleModel}</span>
            <span className={styles.itemContent}>
                <Badge shape={'rectangle'} variant={status} />
            </span>
            <div className={styles.icon}>{icon}</div>
        </div>
    )
}

export default ListItem
