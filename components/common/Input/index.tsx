'use client'

import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { inputStyle } from './styles.css'
import { InputSizeType } from './types'

interface Props extends ComponentPropsWithoutRef<'input'> {
    inputSize?: InputSizeType
    hasIcon?: boolean
    errorMessage?: string | null
    hasError?: boolean
}

const Input = forwardRef<HTMLInputElement, Props>(
    ({ inputSize = 'small', value, placeholder, hasIcon, errorMessage, hasError, onChange, ...props }, ref) => {
        return (
            <div>
                <Input
                    ref={ref}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={inputStyle[inputSize]}
                    {...props}
                />
                {/* <ErrorMessage errorMessage={errorMessage} /> */}
            </div>
        )
    },
)

Input.displayName = 'Input'

export default Input
