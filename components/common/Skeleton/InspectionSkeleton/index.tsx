import { Skeleton } from '@mantine/core'

import * as styles from './styles.css'

const InspectionSkeleton = () => {
    return (
        <div className={styles.container}>
            <Skeleton height={100} mt={4} width='100%' radius='md' />
            <Skeleton height={100} mt={4} width='100%' radius='md' />
            <Skeleton height={100} mt={4} width='100%' radius='md' />
            <Skeleton height={100} mt={4} width='100%' radius='md' />
            <Skeleton height={100} mt={4} width='100%' radius='md' />
            <Skeleton height={100} mt={4} width='100%' radius='md' />
            <Skeleton height={100} mt={4} width='100%' radius='md' />
            <Skeleton height={100} mt={4} width='100%' radius='md' />
        </div>
    )
}

export default InspectionSkeleton
