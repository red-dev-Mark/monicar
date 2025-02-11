import { Skeleton } from '@mantine/core'

import * as styles from './styles.css'

const RegisterSkeleton = () => {
    return (
        <div className={styles.container}>
            <Skeleton height={70} mt={6} width='60%' radius='md' />
            <Skeleton height={70} mt={6} width='60%' radius='md' />
            <Skeleton height={70} mt={6} width='60%' radius='md' />
            <Skeleton height={70} mt={6} width='60%' radius='md' />
        </div>
    )
}

export default RegisterSkeleton
