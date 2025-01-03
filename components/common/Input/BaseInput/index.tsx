'use client'

import { ComponentPropsWithoutRef, forwardRef } from 'react'

import Message from '../../Message'
import { MessageType } from '../../Message/types'

import * as styles from './styles.css'

interface BaseInputProps extends ComponentPropsWithoutRef<'input'> {
    className?: string
    isError?: boolean
    messageType?: MessageType
}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
    ({ className = '', isError = false, messageType, ...props }, ref) => {
        return (
            <div>
                <input
                    ref={ref}
                    className={`${styles.baseInput} ${isError ? styles.errorInput : ''} ${className}`}
                    {...props}
                />
                <Message messageType={messageType} isError={isError} />
            </div>
        )
    },
)

BaseInput.displayName = 'BaseInput'

export default BaseInput
