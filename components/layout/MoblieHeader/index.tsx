import BackButton from '@/components/common/Button/BackButton'

import * as styles from './styles.css'

interface MobileHeaderProps {
    title?: string
    isBackButton?: boolean
    className?: string
}

const MobileHeader = ({ title, isBackButton = false, className }: MobileHeaderProps) => {
    return (
        <>
            <div className={`${styles.container} ${className ?? ''}`}>
                {isBackButton && <BackButton />}
                <h1 className={styles.title}>{title}</h1>
            </div>
            <div className={styles.spacer} />
        </>
    )
}

export default MobileHeader
