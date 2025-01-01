import React from 'react'

import * as styles from '@/components/common/Button/Button.css'

interface ButtonProps {
    variant?: 'primary' | 'secondary'
    children: React.ReactNode
    onClick?: () => void
}

export const Button = ({ variant = 'primary', children, onClick }: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${variant === 'primary' ? styles.primary : styles.secondary}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
