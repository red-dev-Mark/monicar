import { useEffect, useState } from 'react'

import { DetailResponse } from '../types'

export const useFilteredData = (logData: DetailResponse | null | undefined) => {
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null])
    const [filteredData, setFilteredData] = useState<DetailResponse | null>(null)

    useEffect(() => {
        if (logData) {
            setFilteredData(logData)
        }
    }, [logData])

    const handleDateRangeChange = (value: [Date | null, Date | null]) => {
        setDateRange(value)

        if (!value[1]) return

        if (!logData || !value[0] || !value[1]) {
            setFilteredData(logData || null)
            return
        }

        const [startDate, endDate] = value
        const filteredRecords = logData.records.filter((record) => {
            const recordDate = new Date(record.usageDate)
            return recordDate >= startDate && recordDate <= endDate
        })

        const totalDistance = filteredRecords.reduce((sum, record) => sum + record.drivingInfo.totalDriving, 0)
        const businessDistance = filteredRecords.reduce(
            (sum, record) => sum + record.drivingInfo.businessDrivingDetails.drivingDistance,
            0,
        )
        const businessRatio = totalDistance ? Number(((businessDistance / totalDistance) * 100).toFixed(1)) : 0

        setFilteredData({
            ...logData,
            records: filteredRecords,
            taxStartPeriod: startDate.toISOString().split('T')[0],
            taxEndPeriod: endDate.toISOString().split('T')[0],
            taxPeriodDistance: totalDistance,
            taxPeriodBusinessDistance: businessDistance,
            businessUseRatio: businessRatio,
        })
    }

    return { filteredData, dateRange, handleDateRangeChange }
}
