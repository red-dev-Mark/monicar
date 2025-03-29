import { useQuery } from '@tanstack/react-query'

import { noticeAPI } from '@/lib/apis'
import { minutesToStaleTime } from '@/lib/utils/tanstack'
import { Result } from '@/types/apis/common'
import { Notice } from '@/types/notice'

export const useNoticeList = () => {
    return useQuery<Result<Notice[]>, Error, Notice[]>({
        queryKey: ['notice-list'],
        queryFn: noticeAPI.getNoticeList,
        select: (result) => {
            if (!result.isSuccess || !result.data) {
                throw new Error(result.error)
            }

            return result.data
        },
        staleTime: minutesToStaleTime(30),
    })
}
