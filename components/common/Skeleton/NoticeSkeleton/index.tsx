import { Skeleton } from '@mantine/core'

import * as styles from './styles.css'

const NoticeSkeleton = () => {
    return (
        <>
            <div className={styles.noticeItem}>
                <div className={styles.imageWrapper}>
                    <Skeleton height={80} radius={12} />
                </div>
                <div className={styles.contentsWrapper}>
                    <Skeleton height={24} width='80%' radius='md' />
                    <Skeleton height={16} width='60%' radius='md' />
                    <Skeleton height={16} width='40%' radius='md' />
                </div>
            </div>
        </>
    )
}

export default NoticeSkeleton
