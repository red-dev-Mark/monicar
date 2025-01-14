import Badge from '@/components/common/Badge'
import { RightIcon } from '@/public/icons'
import { ListItemModel } from '@/types/log'

import * as styles from './styles.css'

interface ListItemProps {
    data: ListItemModel
}

const ListItem = ({ data }: ListItemProps) => {
    const { vehicleNumber, vehicleModel, status } = data

    return (
        <div className={styles.container}>
            <span className={styles.itemWrapper}>{vehicleNumber}</span>
            <span className={styles.itemWrapper}>{vehicleModel}</span>
            <span className={styles.itemWrapper}>
                <Badge shape={'rectangle'} variant={status} />
            </span>
            <div className={styles.icon}>
                <RightIcon />
            </div>
        </div>
    )
}

export default ListItem
