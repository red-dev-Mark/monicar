'use client'

import React, { ComponentPropsWithoutRef, ReactNode } from 'react'

import { BaseButton } from '../BaseButton'

import * as styles from './style.css'

type SizeType = 'small' | 'large'
type ColorType = 'pink' | 'black'

interface RoundButtonProps extends ComponentPropsWithoutRef<'button'> {
    children: ReactNode
    size?: SizeType
    color?: ColorType
}

export const RoundButton = ({ size = 'large', color = 'pink', children, ...props }: RoundButtonProps) => {
    return (
        <BaseButton className={styles.button({ size, color })} {...props}>
            {children}
        </BaseButton>
    )
}
