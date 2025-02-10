import * as XLSX from 'xlsx'

import { API_ENDPOINTS } from '@/constants/api'
import { HOURLY_EXCEL_FILE_NAME, HOURLY_EXCEL_SHEET_NAME } from '@/constants/excel'
import { httpClient } from '@/lib/apis'
import { formatTimeToHHMM } from '@/lib/utils/date'
import { HourlyListItemModel } from '@/types/log'

interface HourlyExcelData {
    운행시간: string
    운행거리: string
}

const hourlyExcel = (data: HourlyListItemModel[]) => {
    return data.map((log) => ({
        운행시간: `${formatTimeToHHMM(new Date(log.startTime))} - ${formatTimeToHHMM(new Date(log.endTime))}`,
        운행거리: `${log.drivingDistance.toLocaleString('ko-KR')}km`,
    }))
}

const saveExcel = (excelData: HourlyExcelData[]) => {
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(excelData)
    XLSX.utils.book_append_sheet(wb, ws, HOURLY_EXCEL_SHEET_NAME)
    XLSX.writeFile(wb, HOURLY_EXCEL_FILE_NAME)
}

export const downloadHourlyExcel = async (id: string, date: string) => {
    try {
        const response = await httpClient.get(`${API_ENDPOINTS.HOURLY}/${id}`, {
            params: {
                page: 0,
                size: 1000,
                date,
            },
        })
        const allData = response.data.result
        const excelData = hourlyExcel(allData)
        saveExcel(excelData)
    } catch (error) {
        console.error('Excel 다운로드 실패', error)
        throw error
    }
}
