'use client'

import { useRouter } from 'next/navigation'

import { BackIcon } from '@/public/icons'

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
            <BackIcon style={{ width: '24px', height: '24px' }} />
        </button>
    )
}

export default BackButton
