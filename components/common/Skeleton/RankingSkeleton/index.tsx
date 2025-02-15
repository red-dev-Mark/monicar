import { Skeleton } from '@mantine/core'

import * as styles from './styles.css'

const RankingSkeleton = () => {
    return (
        <div>
            <div className={styles.message}>
                <Skeleton height={30} width='60%' radius='md' />
                <Skeleton height={24} width='40%' radius='md' />
                <Skeleton height={24} width='50%' radius='md' />
            </div>
        </div>
    )
}

export default RankingSkeleton
