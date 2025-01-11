'use client'

import Image from 'next/image'
import { ComponentPropsWithoutRef, forwardRef, KeyboardEvent } from 'react'

import BaseInput from '../BaseInput'

import * as styles from './styles.css'

interface SearchInputProps extends ComponentPropsWithoutRef<'input'> {
    icon: string
    className?: string
    onSubmit?: () => void
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
    ({ icon, className = '', onSubmit, ...props }, ref) => {
        const handleEnterDown = (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter' && onSubmit) {
                onSubmit()
            }
        }

        return (
            <div className={styles.container}>
                <BaseInput
                    ref={ref}
                    className={`${styles.input} ${className}`}
                    onKeyDown={handleEnterDown}
                    {...props}
                />
                {icon && (
                    <button className={styles.iconWrapper} onClick={onSubmit}>
                        <Image src={icon} alt='서치인풋 아이콘' width={28} height={28} />
                    </button>
                )}
            </div>
        )
    },
)

SearchInput.displayName = 'SearchInput'

export default SearchInput
