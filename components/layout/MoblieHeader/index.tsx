import BackButton from '@/components/common/Button/BackButton'

import * as styles from './styles.css'

interface MobileHeaderProps {
    title?: string
    isBackButton?: boolean
    onBackButtonClick?: () => void
    className?: string
}

const MobileHeader = ({ title, isBackButton = false, onBackButtonClick, className }: MobileHeaderProps) => {
    return (
        <>
            <div className={`${styles.container} ${className ?? ''}`}>
                {isBackButton && <BackButton onBackButtonClick={onBackButtonClick} />}
                <h1 className={styles.title}>{title}</h1>
            </div>
            <div className={styles.spacer} />
        </>
    )
}

export default MobileHeader
