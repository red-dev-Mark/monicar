import { Skeleton } from '@mantine/core'

import * as styles from './styles.css'

const LogListItemSkeleton = () => {
    return (
        <button className={styles.container} type='button'>
            <ul className={styles.list}>
                <li className={styles.itemWrapper}>
                    <Skeleton height={40} mt={4} width='70%' radius='md' />
                </li>
                <li className={styles.itemWrapper}>
                    <Skeleton height={40} mt={4} width='50%' radius='md' />
                </li>
                <li className={styles.itemWrapper}>
                    <Skeleton height={40} mt={4} width='50%' radius='md' />
                </li>

                <li className={styles.itemWrapper}>
                    <Skeleton height={40} mt={4} width='50%' radius='md' />
                </li>
                <li className={styles.badge}>
                    <Skeleton height={40} mt={4} width='70%' radius='md' />
                </li>
            </ul>
            <div className={styles.icon}></div>
        </button>
    )
}

export default LogListItemSkeleton
