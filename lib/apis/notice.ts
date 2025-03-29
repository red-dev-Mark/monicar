import { httpClient } from '@/lib/apis'

export const noticeAPI = {
    // 공지사항 목록 조회
    getNoticeList: async () => {
        const response = await httpClient.get(`api/v1/notice`)

        return response.data.result
    },
    // 공지사항 개별항목 조회
    getNoticeDetail: async (noticeId: string) => {
        const response = await httpClient.get(`api/v1/notice/${noticeId}`)

        return response.data.result
    },
}
