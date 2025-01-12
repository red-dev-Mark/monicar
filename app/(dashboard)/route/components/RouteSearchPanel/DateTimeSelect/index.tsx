'use client'

import { Select } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'

import { DateTime } from '@/app/(dashboard)/route/types/date'

import { YEAR_OPTIONS, MONTH_OPTIONS, DAY_OPTIONS, HOUR_OPTIONS, MINUTE_OPTIONS } from './constants'
import * as styles from './styles.css'

interface DateTimeSelectProps {
    label: string
    disabled: boolean
    date: DateTime
    setDate: Dispatch<SetStateAction<DateTime>>
}

const DateTimeSelect = ({ label, disabled, date, setDate }: DateTimeSelectProps) => {
    return (
        <div className={styles.selectContainer}>
            <p className={styles.label}>{label}</p>
            <div className={styles.selectGroup}>
                <Select
                    value={date.year}
                    onChange={(selected) =>
                        setDate((prev) => ({
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
                    value={date.month}
                    onChange={(selected) =>
                        setDate((prev) => ({
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
                    value={date.date}
                    onChange={(selected) =>
                        setDate((prev) => ({
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
                    value={date.hour}
                    onChange={(selected) =>
                        setDate((prev) => ({
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
                    value={date.minute}
                    onChange={(selected) =>
                        setDate((prev) => ({
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
