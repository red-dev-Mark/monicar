'use client'

import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as styles from './style.css'

export type SizeType = 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
export type ColorType = 'dark' | 'primary' | 'gray' | 'white' | 'transparent'

interface BaseButtonProps extends ComponentPropsWithoutRef<'button'> {
    children: ReactNode
    size?: SizeType
    color?: ColorType
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const BaseButton = ({ children, size = 'medium', color = 'primary', onClick, ...props }: BaseButtonProps) => {
    return (
        <button onClick={onClick} className={styles.button({ size, color })} {...props}>
            {children}
        </button>
    )
}
