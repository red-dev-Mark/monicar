import { getMarkerColor } from '@/lib/utils/map'

import * as styles from './styles.css'

interface ClusterMarkerProps {
    count: number
    onClick?: () => void
}

const ClusterMarker = ({ count, onClick }: ClusterMarkerProps) => {
    const colors = getMarkerColor(count)

    return (
        <div
            className={styles.outer}
            style={{
                backgroundColor: colors.outer,
            }}
        >
            <div
                onClick={onClick}
                className={styles.inner}
                style={{
                    backgroundColor: colors.inner,
                }}
                role='presentation'
            >
                {count.toLocaleString()}
            </div>
        </div>
    )
}

export default ClusterMarker
