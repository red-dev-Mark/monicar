import { Progress as MantineProgress } from '@mantine/core'

import * as styles from './styles.css'

interface ProgressProps {
    total: number
    current: number
    color: string
    children?: React.ReactNode
}

const Progress = ({ total, current, color, children }: ProgressProps) => {
    const percent = (current / total) * 100

    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>
                <span className={styles.circle} style={{ background: `${color}` }} />
                <h3 className={styles.title}>{children}</h3>
            </div>

            <p className={styles.count}>{current}</p>
            <MantineProgress color={color} radius='md' size='lg' value={percent} />
        </div>
    )
}

export default Progress
