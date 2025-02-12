import * as XLSX from 'xlsx'

import { HOURLY_EXCEL_FILE_NAME, HOURLY_EXCEL_SHEET_NAME } from '@/constants/excel'
import { formatTimeToHHMM } from '@/lib/utils/date'
import { HourlyListItemModel } from '@/types/log'

interface HourlyExcelData {
    운행시간: string
    운행거리: string
}

export const hourlyExcel = (data: HourlyListItemModel[]) => {
    return data.map((log) => ({
        운행시간: `${formatTimeToHHMM(new Date(log.startTime))} - ${formatTimeToHHMM(new Date(log.endTime))}`,
        운행거리: `${log.drivingDistance.toLocaleString('ko-KR')}km`,
    }))
}

export const saveHourlyExcel = (excelData: HourlyExcelData[]) => {
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(excelData)
    XLSX.utils.book_append_sheet(wb, ws, HOURLY_EXCEL_SHEET_NAME)
    XLSX.writeFile(wb, HOURLY_EXCEL_FILE_NAME)
}
