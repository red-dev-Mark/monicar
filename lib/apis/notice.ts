import { httpClient } from '@/lib/apis'
import { Result } from '@/types/apis/common'
import { Notice } from '@/types/notice'

export const noticeAPI = {
    // 공지사항 목록 조회
    getNoticeList: async (): Promise<Result<Notice[]>> => {
        const response = await httpClient.get(`api/v1/notice`)

        if (!response.data.isSuccess) {
            return { isSuccess: false, error: response.data.errorMessage }
        }

        if (!response.data.result) {
            return { isSuccess: false, error: '공지사항 목록 조회에 실패하였습니다' }
        }

        return { isSuccess: true, data: response.data.result }
    },

    // 공지사항 개별항목 조회
    getNoticeDetail: async (noticeId: string) => {
        const response = await httpClient.get(`api/v1/notice/${noticeId}`)

        return response.data.result
    },
}
