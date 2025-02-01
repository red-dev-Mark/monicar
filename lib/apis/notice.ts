// import { apiClient } from '@/lib/apis/client'

export const noticeService = {
    // 공지사항 목록 조회
    getNoticeList: async () => {
        // const response = await apiClient.get(`/v1/control-center/notice`)

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
            {
                id: 3,
                title: '2025년 3분기 차량 정기점검 안내',
                content:
                    '2025년 3분기 차량 정기점검이 진행될 예정입니다. 담당자들은 일정을 확인하시고 차질없이 준비해주시기 바랍니다.',
                imageUrl: '/images/notice-1.jpg',
                createdAt: '2025-01-30T09:18:30',
            },
            {
                id: 4,
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
    // 공지사항 개별항목 조회
    getNoticeItem: async () => {
        // getNoticeItem: async (noticeId: string) => {
        // const response = await apiClient.get(`/v1/control-center/notice/${noticeId}`)

        // TODO: API 연동
        const mockNoticeData = {
            id: 1,
            title: '2025년 3분기 차량 정기점검 안내',
            content: `안녕하세요.\n테크돔 시스템 담당자입니다.\n\n시스템 안정화 및 서비스 품질 향상을 위한 정기 점검이 진행될 예정입니다.\n\n[점검 일시]\n2024년 2월 24일(토) 02:00 ~ 06:00 (4시간)\n\n[점검 내용]\n- 시스템 서버 업그레이드\n- 보안 패치 적용\n- 데이터베이스 최적화\n\n[영향 범위]\n- 점검 시간 동안 서비스 이용이 일시적으로 중단됩니다.\n- 진행 상황에 따라 점검 시간이 변동될 수 있습니다.\n\n더 나은 서비스 제공을 위한 점검이오니 이용에 참고 부탁드립니다.\n\n감사합니다.`,
            imageUrl: '/images/notice-1.jpg',
            createdAt: '2025-01-30T09:18:30',
        }

        // return response.data.result
        return mockNoticeData
    },
}
