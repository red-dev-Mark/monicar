'use client'

import { Select } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'

import { DateTime } from '@/app/(dashboard)/route/types/date'

import { YEAR_OPTIONS, MONTH_OPTIONS, DAY_OPTIONS, HOUR_OPTIONS, MINUTE_OPTIONS } from './constants'
import * as styles from './styles.css'

interface DateTimeSelectProps {
    label: string
    disabled: boolean
    value: DateTime
    onChange: Dispatch<SetStateAction<DateTime>>
}

const DateTimeSelect = ({ label, disabled, value, onChange }: DateTimeSelectProps) => {
    return (
        <div className={styles.selectContainer}>
            <p className={styles.label}>{label}</p>
            <div className={styles.selectGroup}>
                <Select
                    value={value.year}
                    onChange={(selected) =>
                        onChange((prev) => ({
                            ...prev,
                            year: selected || '',
                        }))
                    }
                    placeholder='2025년'
                    disabled={disabled}
                    data={YEAR_OPTIONS}
                    styles={styles.selectStyles}
                    withCheckIcon={false}
                    allowDeselect={false}
                />
                <Select
                    value={value.month}
                    onChange={(selected) =>
                        onChange((prev) => ({
                            ...prev,
                            month: selected || '',
                        }))
                    }
                    data={MONTH_OPTIONS}
                    placeholder='01월'
                    disabled={disabled}
                    styles={styles.selectStyles}
                    withCheckIcon={false}
                    allowDeselect={false}
                />
                <Select
                    value={value.date}
                    onChange={(selected) =>
                        onChange((prev) => ({
                            ...prev,
                            date: selected || '',
                        }))
                    }
                    data={DAY_OPTIONS}
                    placeholder='01일'
                    disabled={disabled}
                    styles={styles.selectStyles}
                    withCheckIcon={false}
                    allowDeselect={false}
                />
                <Select
                    value={value.hour}
                    onChange={(selected) =>
                        onChange((prev) => ({
                            ...prev,
                            hour: selected || '',
                        }))
                    }
                    data={HOUR_OPTIONS}
                    placeholder='00시'
                    disabled={disabled}
                    styles={styles.selectStyles}
                    withCheckIcon={false}
                    allowDeselect={false}
                />
                <Select
                    value={value.minute}
                    onChange={(selected) =>
                        onChange((prev) => ({
                            ...prev,
                            minute: selected || '',
                        }))
                    }
                    data={MINUTE_OPTIONS}
                    placeholder='00분'
                    disabled={disabled}
                    styles={styles.selectStyles}
                    withCheckIcon={false}
                    allowDeselect={false}
                />
            </div>
        </div>
    )
}

export default DateTimeSelect
