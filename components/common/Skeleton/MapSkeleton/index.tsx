import { Skeleton } from '@mantine/core'

import * as styles from './styles.css'

const MapSkeleton = () => {
    return (
        <div className={styles.container}>
            <Skeleton height='100%' radius={8} />
            <div className={styles.overlay}>
                <div className={styles.pinContainer}>
                    <div className={styles.pin} />
                    <div className={styles.pulseCircle} />
                </div>
                <p className={styles.text}>지도를 불러오고 있어요</p>
            </div>
        </div>
    )
}

export default MapSkeleton
