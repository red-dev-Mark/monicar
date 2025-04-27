import { useEffect, useRef, useState } from 'react'

import { API_URL } from '@/constants/api'
import { AlarmResponse } from '@/types/vehicle'

export const useSseAlarm = () => {
    const [alarms, setAlarms] = useState<AlarmResponse[]>([])
    const [error, setError] = useState<Error | null>(null)

    const timersRef = useRef<Map<string, NodeJS.Timeout>>(new Map())

    const eventTypes = ['REQUIRED', 'SCHEDULED', 'INPROGRESS', 'COMPLETED']
    const SSE_URL = `${API_URL}/api/v1/alarm/subscribe`

    useEffect(() => {
        let eventSource: EventSource | null = null

        const timers = timersRef.current

        const connectSSE = () => {
            eventSource = new EventSource(SSE_URL, { withCredentials: true })

            const addAlarm = (event: MessageEvent) => {
                try {
                    const newAlarm = JSON.parse(event.data)

                    if (timers.has(newAlarm.id)) {
                        clearTimeout(timers.get(newAlarm.id))
                        timers.delete(newAlarm.id)
                    }

                    setAlarms((prev) => [...prev, newAlarm])

                    const newTimer = setTimeout(() => {
                        setAlarms((prev) => prev.filter((item) => item.id !== newAlarm.id))
                        timers.delete(newAlarm.id)
                    }, 4000)

                    timers.set(newAlarm.id, newTimer)
                } catch (error) {
                    console.error('점검 알림 SSE 연결 실패: ', error)
                }
            }

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
            timers.forEach((timer) => {
                clearTimeout(timer)
            })
            if (eventSource) {
                eventSource.close()
            }
        }
    }, [])

    return {
        alarms,
        error,
    }
}
