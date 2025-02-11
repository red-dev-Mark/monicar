import { Skeleton } from '@mantine/core'

import * as styles from './styles.css'

const LogSkeleton = () => {
    return (
        <div className={styles.container}>
            <Skeleton height={70} mt={6} width='100%' radius='md' />
            <Skeleton height={70} mt={6} width='100%' radius='md' />
            <Skeleton height={70} mt={6} width='100%' radius='md' />
            <Skeleton height={70} mt={6} width='100%' radius='md' />
            <Skeleton height={70} mt={6} width='100%' radius='md' />
            <Skeleton height={70} mt={6} width='100%' radius='md' />
            <Skeleton height={70} mt={6} width='100%' radius='md' />
        </div>
    )
}

export default LogSkeleton
