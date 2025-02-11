import * as XLSX from 'xlsx'

import { API_ENDPOINTS } from '@/constants/api'
import { LOG_EXCEL_FILE_NAME, LOG_EXCEL_SHEET_NAME } from '@/constants/excel'
import { httpClient } from '@/lib/apis'
import { LogListItemModel } from '@/types/log'

interface ExcelData {
    차량번호: string
    차종: string
    운행일수: string
    총운행거리: string
}

export const downloadDetailExcel = (data: LogListItemModel[]) => {
    return data.map((item) => ({
        차량번호: item.vehicleNumber,
        차종: item.vehicleModel,
        운행일수: `${item.drivingDays.toLocaleString('ko-KR')}`,
        총운행거리: `${item.totalDistance.toLocaleString('ko-KR')}km`,
    }))
}

export const saveDetailExcel = (excelData: ExcelData[]) => {
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(excelData)
    XLSX.utils.book_append_sheet(wb, ws, LOG_EXCEL_SHEET_NAME)
    XLSX.writeFile(wb, LOG_EXCEL_FILE_NAME)
}

export const downloadExcel = async (keyword: string) => {
    try {
        const response = await httpClient.get(API_ENDPOINTS.LOG, {
            params: {
                page: 0,
                size: 1000,
                sort: 'CREATED_AT_DESC',
                keyword,
            },
        })
        const allData = response.data.result.content
        const excelData = downloadDetailExcel(allData)
        saveDetailExcel(excelData)
    } catch (error) {
        console.error('Excel 다운로드 실패', error)
        throw error
    }
}
