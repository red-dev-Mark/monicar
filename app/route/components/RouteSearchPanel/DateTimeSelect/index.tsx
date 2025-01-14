'use client'

import { Select } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'

import { DateTime } from '@/app/route/types/date'

import { YEAR_OPTIONS, MONTH_OPTIONS, DAY_OPTIONS, HOUR_OPTIONS, MINUTE_OPTIONS } from './constants'
import * as styles from './styles.css'

interface DateTimeField {
    value: keyof DateTime
    data: {
        value: string
        label: string
    }[]
    placeholder: string
}

interface DateTimeSelectProps {
    label: string
    value: DateTime
    onChange: Dispatch<SetStateAction<DateTime>>
    disabled: boolean
}

const DateTimeSelect = ({ label, value, onChange, disabled }: DateTimeSelectProps) => {
    const dateTimeFields: DateTimeField[] = [
        { value: 'year', data: YEAR_OPTIONS, placeholder: '2025년' },
        { value: 'month', data: MONTH_OPTIONS, placeholder: '01월' },
        { value: 'date', data: DAY_OPTIONS, placeholder: '01일' },
        { value: 'hour', data: HOUR_OPTIONS, placeholder: '00시' },
        { value: 'minute', data: MINUTE_OPTIONS, placeholder: '00분' },
    ]

    return (
        <div className={styles.selectContainer}>
            <p className={styles.label}>{label}</p>
            <div className={styles.selectGroup}>
                {dateTimeFields.map((field) => {
                    return (
                        <Select
                            key={field.value}
                            data={field.data}
                            placeholder={field.placeholder}
                            value={value[field.value]}
                            onChange={(selected) =>
                                onChange((prev) => ({
                                    ...prev,
                                    [field.value]: selected || '',
                                }))
                            }
                            disabled={disabled}
                            styles={styles.selectStyles}
                            withCheckIcon={false}
                            allowDeselect={false}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default DateTimeSelect
