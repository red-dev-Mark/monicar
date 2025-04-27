import { useEffect, useState } from 'react'

import { API_URL } from '@/constants/api'
import { AlarmResponse } from '@/types/vehicle'

export const useSubscribe = () => {
    const [alarm, setAlarm] = useState<AlarmResponse[]>([])
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const SSE_URL = `${API_URL}/api/v1/alarm/subscribe`
        let eventSource: EventSource | null = null
        const timers: Record<string, NodeJS.Timeout> = {}

        const connectSSE = () => {
            eventSource = new EventSource(SSE_URL, { withCredentials: true })

            const addAlarm = (event: MessageEvent) => {
                try {
                    const newAlarm = JSON.parse(event.data)
                    // setAlarm((prev) => [...prev, newAlarm])

                    // setTimeout(() => {
                    //     setAlarm((prev) => prev.filter((item) => item.id !== newAlarm.id))
                    // }, 5000)

                    // 기존 동일 ID의 알림 타이머가 있다면 제거
                    if (timers[newAlarm.id]) {
                        clearTimeout(timers[newAlarm.id])
                        delete timers[newAlarm.id]
                    }

                    // 새 알림 추가
                    setAlarm((prev) => [...prev, newAlarm])

                    timers[newAlarm.id] = setTimeout(() => {
                        setAlarm((prev) => prev.filter((item) => item.id !== newAlarm.id))
                        delete timers[newAlarm.id]
                    }, 4000)
                } catch (error) {}
            }

            const eventTypes = ['REQUIRED', 'SCHEDULED', 'INPROGRESS', 'COMPLETED']
            eventTypes.forEach((type) => {
                eventSource?.addEventListener(type, addAlarm)
            })

            eventSource.onopen = () => {
                setError(null)
            }

            eventSource.onerror = (error) => {
                console.error('점검 알림 SSE 연결 실패: ', error)
                setError(new Error('점검 알림 SSE 연결 실패, 재연결 시도'))

                if (eventSource) {
                    eventSource.close()
                    eventSource = null

                    setTimeout(connectSSE, 1000)
                }
            }
        }

        connectSSE()

        return () => {
            // console.log('SSE 연결 종료')
            // eventSource.close()
        }
    }, [])

    return {
        alarm,
        error,
    }
}
