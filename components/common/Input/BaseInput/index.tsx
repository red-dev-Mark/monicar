import { ComponentPropsWithoutRef, forwardRef } from 'react'

import * as styles from './styles.css'

interface BaseInputProps extends ComponentPropsWithoutRef<'input'> {
    isError?: boolean
    className?: string
}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(({ isError = false, className = '', ...props }, ref) => {
    return (
        <input
            ref={ref}
            className={`${styles.baseInput} 
                ${isError && styles.errorInput}
                ${className || ''}`}
            {...props}
        />
    )
})

BaseInput.displayName = 'BaseInput'

export default BaseInput
