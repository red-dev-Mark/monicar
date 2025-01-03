'use client'

import React, { ComponentPropsWithoutRef } from 'react'

import * as styles from './style.css'

export type SizeType = 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
export type ColorType = 'dark' | 'primary' | 'gray' | 'white'

interface BaseButtonProps extends ComponentPropsWithoutRef<'button'> {
    className?: string
    text?: string
    size?: SizeType
    color?: ColorType
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const BaseButton = ({
    className,
    text,
    size = 'medium',
    color = 'primary',
    onClick,
    ...props
}: BaseButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.base} ${styles.buttonSize[size]} ${styles.buttonColor[color]} ${className ?? ''}`}
            {...props}
        >
            {text}
        </button>
    )
}
