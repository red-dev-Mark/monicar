'use client'

import { ComponentPropsWithoutRef, forwardRef, KeyboardEvent, useState } from 'react'

import * as styles from './styles.css'

interface BaseInputProps extends ComponentPropsWithoutRef<'input'> {
    type?: string
    isError?: boolean
    className?: string
    onSubmit?: () => void
}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
    ({ type = 'text', isError = false, placeholder, className = '', onSubmit, ...props }, ref) => {
        const [isComposing, setIsComposing] = useState(false)

        const handleEnterDown = (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter' && onSubmit) {
                if (isComposing) return

                onSubmit()
            }
        }

        return (
            <input
                ref={ref}
                type={type}
                placeholder={placeholder || '차량번호를 검색하세요.'}
                onCompositionStart={() => setIsComposing(true)}
                onCompositionEnd={() => setIsComposing(false)}
                onKeyDown={handleEnterDown}
                className={`${styles.baseInput} 
    ${isError && styles.errorInput}
    ${className}`}
                {...props}
            />
        )
    },
)

BaseInput.displayName = 'BaseInput'

export default BaseInput
