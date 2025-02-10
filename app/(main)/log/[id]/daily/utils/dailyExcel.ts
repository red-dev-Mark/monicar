import * as XLSX from 'xlsx'

import { API_ENDPOINTS } from '@/constants/api'
import { DAILY_EXCEL_FILE_NAME, DAILY_EXCEL_SHEET_NAME } from '@/constants/excel'
import { httpClient } from '@/lib/apis'
import { formatDrivingTime } from '@/lib/utils/map'
import { DailyListItemModel } from '@/types/log'

interface DailyExcelData {
    운행일자: string
    운행거리: string
    시간: string
}

const dailyExcel = (data: DailyListItemModel[]) => {
    return data.map((log) => ({
        운행일자: log.drivingDate,
        운행거리: `${log.totalDistance.toLocaleString('ko-KR')}km`,
        시간: formatDrivingTime(log.totalDrivingSeconds),
    }))
}

const saveExcel = (excelData: DailyExcelData[]) => {
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(excelData)
    XLSX.utils.book_append_sheet(wb, ws, DAILY_EXCEL_SHEET_NAME)
    XLSX.writeFile(wb, DAILY_EXCEL_FILE_NAME)
}

export const downloadDailyExcel = async (id: string, period: string) => {
    try {
        const response = await httpClient.get(`${API_ENDPOINTS.DAILY}/${id}`, {
            params: {
                page: 0,
                size: 1000,
                period,
            },
        })
        const allData = response.data.result
        const excelData = dailyExcel(allData)
        saveExcel(excelData)
    } catch (error) {
        console.error('Excel 다운로드 실패', error)
        throw error
    }
}
