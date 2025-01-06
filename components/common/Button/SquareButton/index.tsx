'use client'

import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { BaseButton } from '../BaseButton'

export type ColorType = 'dark' | 'primary' | 'gray' | 'white' | 'transparent'

interface SquareButtonProps extends ComponentPropsWithoutRef<'button'> {
    children?: ReactNode
    color?: ColorType
}

const SquareButton = ({ children, ...props }: SquareButtonProps) => {
    return (
        <div>
            <BaseButton {...props}>{children}</BaseButton>
        </div>
    )
}

export default SquareButton
