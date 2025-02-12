import { useCoordToAddress } from '@/hooks/useCoordToAddress'
import { normalizeCoordinate } from '@/lib/utils/normalize'
import { Route } from '@/types/route'

import * as styles from './styles.css'

interface RouteTimelineItemProps {
    route: Route
}
const RouteTimelineItem = ({ route }: RouteTimelineItemProps) => {
    const lat = normalizeCoordinate(route.lat)
    const lng = normalizeCoordinate(route.lng)
    const address = useCoordToAddress(lat, lng)
    const timestamp = route.timestamp.replace('T', ' ')

    return (
        <div className={styles.tableItem}>
            <p className={styles.timestamp}>{timestamp}</p>
            <p className={styles.speed}>{route.spd} km</p>
            <p className={styles.location}>{address}</p>
        </div>
    )
}

export default RouteTimelineItem
