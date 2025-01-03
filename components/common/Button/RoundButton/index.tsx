'use client'

import React, { ComponentPropsWithoutRef, ReactNode } from 'react'

import { BaseButton } from '../BaseButton'

import * as styles from './style.css'

type RoundSizeType = 'small' | 'large'
type ColorType = 'transparent' | 'white'

interface RoundButtonProps extends ComponentPropsWithoutRef<'button'> {
    className?: string
    children: ReactNode
    size?: RoundSizeType
    color?: ColorType
}

export const RoundButton = ({ className, size = 'large', children, ...props }: RoundButtonProps) => {
    return (
        <BaseButton className={`${styles.round} ${styles.roundSize[size]} ${className ?? ''}`} {...props}>
            {children}
        </BaseButton>
    )
}
