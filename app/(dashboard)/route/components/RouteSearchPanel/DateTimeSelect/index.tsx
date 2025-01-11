import { Select } from '@mantine/core'

import { YEAR_OPTIONS, MONTH_OPTIONS, DAY_OPTIONS, HOUR_OPTIONS, MINUTE_OPTIONS } from './constants'
import * as styles from './styles.css'

interface DateTimeSelectProps {
    label: string
}

const DateTimeSelect = ({ label }: DateTimeSelectProps) => {
    return (
        <div className={styles.selectContainer}>
            <p className={styles.label}>{label}</p>
            <div className={styles.selectGroup}>
                <Select
                    withCheckIcon={false}
                    data={YEAR_OPTIONS}
                    placeholder='2025년'
                    styles={styles.selectStyles}
                    allowDeselect={false}
                />
                <Select
                    withCheckIcon={false}
                    data={MONTH_OPTIONS}
                    placeholder='01월'
                    styles={styles.selectStyles}
                    allowDeselect={false}
                />
                <Select
                    withCheckIcon={false}
                    data={DAY_OPTIONS}
                    placeholder='01일'
                    styles={styles.selectStyles}
                    allowDeselect={false}
                />
                <Select
                    withCheckIcon={false}
                    data={HOUR_OPTIONS}
                    placeholder='00시'
                    styles={styles.selectStyles}
                    allowDeselect={false}
                />
                <Select
                    withCheckIcon={false}
                    data={MINUTE_OPTIONS}
                    placeholder='00분'
                    styles={styles.selectStyles}
                    allowDeselect={false}
                />
            </div>
        </div>
    )
}

export default DateTimeSelect
