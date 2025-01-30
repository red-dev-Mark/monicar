// import { apiClient } from '@/lib/apis/client'

export const noticeService = {
    // 공지사항 목록 조회
    getNoticeList: async () => {
        // const response = await apiClient.get(`/v1/control-center/notices`)

        // TODO: API 연동
        const mockNoticeData = [
            {
                id: 1,
                title: '2025년 3분기 차량 정기점검 안내',
                content:
                    '2025년 3분기 차량 정기점검이 진행될 예정입니다. 담당자들은 일정을 확인하시고 차질없이 준비해주시기 바랍니다.',
                imageUrl: '/images/notice-1.jpg',
                createdAt: '2025-01-30T09:18:30',
            },
            {
                id: 2,
                title: '차량 관리 시스템 업데이트 공지',
                content:
                    '관제 시스템 2.0 버전이 출시됩니다. 주요 업데이트 내용은 실시간 모니터링 기능 개선과 보고서 자동화입니다.',
                imageUrl: '/images/notice-2.jpg',
                createdAt: '2025-01-30T09:18:30',
            },
        ]

        // return response.data.result
        return mockNoticeData
    },
}
