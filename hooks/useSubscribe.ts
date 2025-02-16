import { useEffect, useState } from 'react'

import { InspectionStatusAlarmModel } from '@/components/common/InspectionStatusAlarm'
import { API_URL } from '@/constants/api'

export const useSubscribe = () => {
    const [alarm, setAlarm] = useState<InspectionStatusAlarmModel[]>([])
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const eventSource = new EventSource(`${API_URL}/api/v1/alarm/subscribe`, { withCredentials: true })
        eventSource.onmessage = (event) => {
            try {
                const newNotification = JSON.parse(event.data)

                setAlarm((previous) => [newNotification, ...previous])
            } catch (error) {
                console.error('Error', error)
            }
        }

        eventSource.addEventListener('REQUIRED', (event) => console.log(JSON.parse(event.data)))
        eventSource.addEventListener('SCHEDULED', (event) => console.log(JSON.parse(event.data)))
        eventSource.addEventListener('INPROGRESS', (event) => console.log(JSON.parse(event.data)))
        eventSource.addEventListener('COMPLETED', (event) => console.log(JSON.parse(event.data)))

        eventSource.onopen = () => {
            console.log('SSE 연결 시작')
        }

        eventSource.onerror = (error) => {
            console.error('SSE 에러', error)
            setError(new Error('SSE 연결에 실패'))
            eventSource.close()
        }

        return () => {
            console.log('SSE 연결 종료')
            eventSource.close()
        }
    }, [])

    return {
        alarm,
        error,
    }
}
