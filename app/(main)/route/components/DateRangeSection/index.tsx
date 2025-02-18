import { DatePickerInput, DatesRangeValue } from '@mantine/dates'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { useQueryParams } from '@/hooks/useQueryParams'
import { getVehicleOperationInfo } from '@/lib/services/vehicle'
import { CalendarIcon } from '@/public/icons'
import { FONT_FAMILY } from '@/styles/font.css'
import { vars } from '@/styles/theme.css'
import { VehicleOperationPeriod } from '@/types/vehicle'

import 'dayjs/locale/ko'
import '@mantine/dates/styles.css'
// interface DateRangeSectionProps {
// searchableDateRange: VehicleOperationPeriod
// value: DatesRangeValue
// onChange: (value: DatesRangeValue) => void
// }

// const DateRangeSection = ({ value, onChange }: DateRangeSectionProps) => {
const DateRangeSection = () => {
    const searchParams = useSearchParams()
    const [operationPeriod, setOperationPeriod] = useState<VehicleOperationPeriod>()

    const { addQueries } = useQueryParams()

    const vehicleNumber = searchParams.get('vehicleNumber')
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')

    useEffect(() => {
        if (!vehicleNumber) return

        const getVehicleOperationPeriod = async () => {
            const result = await getVehicleOperationInfo(vehicleNumber)
            if (!result.data) throw new Error(result.error || '차량 검색에 실패했습니다')

            const { firstOperationDate, lastOperationDate } = result?.data
            if (!firstOperationDate || !lastOperationDate) throw new Error(result.error || '차량 운행 기간이 없습니다')

            setOperationPeriod({ firstOperationDate, lastOperationDate })
        }
        getVehicleOperationPeriod()
    }, [vehicleNumber])

    // const result = await getVehicleOperationInfo(inputValue)
    //         // if (!result.data) throw new Error(result.error || '차량 검색에 실패했습니다')

    //         // const { vehicleNumber, firstOperationDate, lastOperationDate } = result?.data
    //         // if (!firstOperationDate || !lastOperationDate) throw new Error(result.error || '차량 운행 기간이 없습니다')

    //         // setOperationPeriod({ firstOperationDate, lastOperationDate })
    //         addQuery('vehicleNumber', inputValue)
    //     } catch (error) {
    //         if (error instanceof Error) {
    //             onError?.(error.message)
    //             clearAllQueries()
    //         }
    //     } finally {
    //         finishSearchingVehicle()
    //     }
    // }
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
