'use client'

import { useRouter } from 'next/navigation'

import * as styles from './styles.css'

interface BackButtonProps {
    onBackButtonClick?: () => void
    className?: string
}

const BackButton = ({ onBackButtonClick, className }: BackButtonProps) => {
    const router = useRouter()
    const navigateBeforePage = () => (onBackButtonClick ? onBackButtonClick : router.back())

    return (
        <button onClick={navigateBeforePage} className={`${styles.button} ${className ?? ''}`}>
            -
        </button>
    )
}

export default BackButton
