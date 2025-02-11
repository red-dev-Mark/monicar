import { dailyExcel, saveDailyExcel } from '@/app/(main)/log/[id]/daily/utils/dailyExcel'
import { hourlyExcel, saveHourlyExcel } from '@/app/(main)/log/[id]/daily/utils/hourlyExcel'
import { downloadDetailExcel, saveDetailExcel } from '@/app/(main)/log/utils/excel'
import { API_ENDPOINTS } from '@/constants/api'

import { httpClient } from '.'

export const documentService = {
    // 운행일지 엑셀 다운로드

    downloadDetailExcel: async (keyword: string) => {
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
    },

    // 일별 운행기록 엑셀 다운로드
    downloadDailyExcel: async (id: string, period: string) => {
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
            saveDailyExcel(excelData)
        } catch (error) {
            console.error('Excel 다운로드 실패', error)
            throw error
        }
    },

    // 시간별 운행기록 엑셀 다운로드
    downloadHourlyExcel: async (id: string, date: string) => {
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
            saveHourlyExcel(excelData)
        } catch (error) {
            console.error('Excel 다운로드 실패', error)
            throw error
        }
    },
}
