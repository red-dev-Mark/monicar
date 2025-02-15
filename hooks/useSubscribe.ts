import { useEffect, useState } from 'react'

import { StatusType } from '@/components/common/Modal/types'

interface Notification {
    id: string
    message: string
    status: StatusType
    vehicleNumber: string
}

export const useSubscribe = () => {
    const [notification, setNotification] = useState<Notification[]>([])
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const eventSource = new EventSource('api/v1/alarm/subscribe')

        eventSource.onmessage = (event) => {
            try {
                const newNotification = JSON.parse(event.data)
                setNotification((previous) => [newNotification, ...previous])
            } catch (error) {
                console.error('Error', error)
            }
        }

        eventSource.onopen = () => {
            console.log('SSE 연결 시작')
        }

        eventSource.onerror = (error) => {
            console.error('SSE 에러', error)
            setError(new Error('SSE 연결에 실패했습니다.'))
            eventSource.close()
        }

        return () => {
            console.log('SSE 연결 종료')
            eventSource.close()
        }
    }, [])

    return {
        notification,
        error,
    }
}
