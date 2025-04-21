import { DatePickerInput, DatesRangeValue } from '@mantine/dates'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { useQueryParams } from '@/hooks/useQueryParams'
import { getVehicleOperationInfo } from '@/lib/services/vehicle'
import { CalendarIcon } from '@/public/icons'
import { FONT_FAMILY } from '@/styles/font.css'
import { vars } from '@/styles/theme.css'
import { VehicleOperationPeriod } from '@/types/vehicle'

import '@mantine/dates/styles.css'
import 'dayjs/locale/ko'

interface DateRangeSectionProps {
    onError: (message: string) => void
}

const DateRangeSection = ({ onError }: DateRangeSectionProps) => {
    const [operationPeriod, setOperationPeriod] = useState<VehicleOperationPeriod>()

    const { addQueries } = useQueryParams()

    const searchParams = useSearchParams()

    const vehicleNumber = searchParams.get('vehicleNumber')
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')

    useEffect(() => {
        if (!vehicleNumber) {
            return
        }

        const getVehicleOperationPeriod = async () => {
            const vehicleOperationInfo = await getVehicleOperationInfo(vehicleNumber, onError)
            if (!vehicleOperationInfo) return

            const { firstOperationDate = '', lastOperationDate = '' } = vehicleOperationInfo
            setOperationPeriod({ firstOperationDate, lastOperationDate })
        }
        getVehicleOperationPeriod()
    }, [vehicleNumber, onError])
    // }, [searchParams, onError])

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

    if (!operationPeriod?.firstOperationDate || !operationPeriod?.lastOperationDate) return
    const dateRange: DatesRangeValue = [startDate ? new Date(startDate) : null, endDate ? new Date(endDate) : null]
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
