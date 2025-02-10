import { useCoordToAddress } from '@/hooks/useCoordToAddress'
import { formatTimeToHHMM } from '@/lib/utils/date'
import { HourlyListItemModel } from '@/types/log'

import * as styles from './styles.css'

interface HourlyListItemProps {
    data: HourlyListItemModel
    onClick?: () => void
}

const HourlyListItem = ({ data, onClick }: HourlyListItemProps) => {
    const { startTime, endTime, drivingDistance, lat, lng } = data
    const address = useCoordToAddress(lat / 1000000, lng / 1000000).split(' ')[0]

    return (
        <div>
            <button className={styles.container} onClick={onClick} type='button'>
                <ul className={styles.list}>
                    <li className={styles.itemWrapper}>
                        {formatTimeToHHMM(new Date(startTime))} - {formatTimeToHHMM(new Date(endTime))}
                    </li>
                    <li className={styles.itemWrapper}>{drivingDistance.toLocaleString('ko-KR')}km</li>
                    <li className={styles.itemWrapper}>{address}</li>
                </ul>
            </button>
        </div>
    )
}

export default HourlyListItem
