import { DatePickerInput, DatesRangeValue } from '@mantine/dates'

import { CalendarIcon } from '@/public/icons'
import { FONT_FAMILY } from '@/styles/font.css'
import { vars } from '@/styles/theme.css'

import 'dayjs/locale/ko'
import '@mantine/dates/styles.css'

interface DateRangeSectionProps {
    searchableDates: {
        firstDateAt: string
        lastDateAt: string
    }
    value: DatesRangeValue
    onChange: (value: DatesRangeValue) => void
}

const DateRangeSection = ({ searchableDates, value, onChange }: DateRangeSectionProps) => {
    return (
        <DatePickerInput
            locale='ko'
            placeholder='경로 기간 선택'
            value={value}
            allowSingleDateInRange
            onChange={onChange}
            valueFormat='YYYY년 MM월 DD일'
            minDate={new Date(searchableDates.firstDateAt)}
            maxDate={new Date(searchableDates.lastDateAt)}
            size='md'
            color='red'
            type='range'
            radius='md'
            styles={{
                input: {
                    height: '48px',
                    paddingLeft: '16px',
                    fontFamily: FONT_FAMILY.airbnbCereal,
                    color: vars.colors.gray[800],
                    border: `1px solid ${vars.colors.gray[200]}`,
                },
            }}
            rightSection={
                <div style={{ width: '24px', height: '24px' }}>
                    <CalendarIcon size={16} stroke={1} />
                </div>
            }
            rightSectionPointerEvents='none'
        />
    )
}

export default DateRangeSection
