'use client'

import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { inputStyle } from './styles.css'
import { InputSizeType } from './types'

interface Props extends ComponentPropsWithoutRef<'input'> {
    inputSize?: InputSizeType
}

const Input = forwardRef<HTMLInputElement, Props>(({ inputSize = 'small', className, ...props }, ref) => {
    return (
        <div>
            <Input ref={ref} className={`${inputStyle[inputSize]} ${className || ''}`} {...props} />
        </div>
    )
})

Input.displayName = 'Input'

export default Input
