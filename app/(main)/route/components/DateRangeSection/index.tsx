import { DatePickerInput, DatesRangeValue } from '@mantine/dates'

import { useQueryParams } from '@/hooks/useQueryParams'
import { CalendarIcon } from '@/public/icons'
import { FONT_FAMILY } from '@/styles/font.css'
import { vars } from '@/styles/theme.css'
import { VehicleOperationPeriod } from '@/types/vehicle'

import '@mantine/dates/styles.css'
import 'dayjs/locale/ko'

interface DateRangeSectionProps {
    dateRange: DatesRangeValue
    operationPeriod: VehicleOperationPeriod
}

const DateRangeSection = ({ dateRange, operationPeriod }: DateRangeSectionProps) => {
    const { addQueries } = useQueryParams()

    const handleDateChange = (value: DatesRangeValue) => {
        if (value[0] && !value[1]) {
            addQueries({
                startDate: value[0].toISOString(),
                endDate: '',
            })
        }

        if (value[0] && value[1]) {
            addQueries({
                startDate: value[0].toISOString(),
                endDate: value[1].toISOString(),
            })
        }
    }

    const { firstOperationDate, lastOperationDate } = operationPeriod

    return (
        <DatePickerInput
            locale='ko'
            placeholder='경로 기간 선택'
            value={dateRange}
            allowSingleDateInRange
            onChange={handleDateChange}
            valueFormat='YYYY년 MM월 DD일'
            minDate={new Date(firstOperationDate!)}
            maxDate={new Date(lastOperationDate!)}
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
