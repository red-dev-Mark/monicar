'use client'

import { Loader } from '@mantine/core'
import Image from 'next/image'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { vars } from '@/styles/theme.css'

import BaseInput from '../BaseInput'

import * as styles from './styles.css'

interface SearchInputProps extends ComponentPropsWithoutRef<'input'> {
    icon: string
    className?: string
    isLoading?: boolean
    onSubmit?: () => void
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
    ({ icon, className = '', isLoading, onSubmit, ...props }, ref) => {
        return (
            <div className={styles.container}>
                <BaseInput ref={ref} className={`${styles.input} ${className}`} onSubmit={onSubmit} {...props} />
                {icon && (
                    <button className={styles.iconWrapper} onClick={onSubmit}>
                        {isLoading ? (
                            <Loader color={vars.colors.primary} size='sm' />
                        ) : (
                            <Image src={icon} alt='서치인풋 아이콘' width={28} height={28} />
                        )}
                    </button>
                )}
            </div>
        )
    },
)

SearchInput.displayName = 'SearchInput'

export default SearchInput
