'use client'

import { useRouter } from 'next/navigation'

import * as styles from './styles.css'

interface BackButtonProps {
    onClickBackButton?: () => void
    className?: string
}

const BackButton = ({ onClickBackButton, className }: BackButtonProps) => {
    const router = useRouter()
    const navigateBeforePage = () => (onClickBackButton ? onClickBackButton : router.back())

    return (
        <button onClick={navigateBeforePage} className={`${styles.button} ${className ?? ''}`}>
            -
        </button>
    )
}

export default BackButton
