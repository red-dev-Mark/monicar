'use client'

import BackButton from '@/components/common/Button/BackButton'
import { mobileOnly } from '@/styles/utils.css'

import * as styles from './styles.css'

interface HeaderProps {
    title: string
    isBackButton?: boolean
    onBackButtonClick?: () => void
    className?: string
}

const Header = ({ title, isBackButton = false, onBackButtonClick, className }: HeaderProps) => {
    return (
        <div className={mobileOnly}>
            <div className={`${styles.header} ${className ?? ''}`}>
                {isBackButton && <BackButton onBackButtonClick={onBackButtonClick} />}
                <h1 className={styles.title}>{title}</h1>
            </div>
            <div className={styles.spacer} />
        </div>
    )
}

export default Header
