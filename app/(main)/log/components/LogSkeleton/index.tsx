import LogListItemSkeleton from '../LogListItemSkeleton'

import * as styles from './styles.css'

const LogSkeleton = () => {
    return (
        <div className={styles.container}>
            <LogListItemSkeleton />
            <LogListItemSkeleton />
            <LogListItemSkeleton />
            <LogListItemSkeleton />
            <LogListItemSkeleton />
            <LogListItemSkeleton />
        </div>
    )
}

export default LogSkeleton
