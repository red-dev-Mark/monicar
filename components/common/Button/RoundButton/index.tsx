'use client'

import React, { ComponentPropsWithoutRef } from 'react'

import { BaseButton } from '../BaseButton'

import * as styles from './style.css'

type RoundSizeType = 'small' | 'large'
type ColorType = 'transparent' | 'white'

interface RoundButtonProps extends ComponentPropsWithoutRef<'button'> {
    className?: string
    text?: string
    size?: RoundSizeType
    color?: ColorType
}

export const RoundButton = ({ className, size = 'large', ...props }: RoundButtonProps) => {
    return <BaseButton className={`${styles.round} ${styles.roundSize[size]} ${className ?? ''}`} {...props} />
}
