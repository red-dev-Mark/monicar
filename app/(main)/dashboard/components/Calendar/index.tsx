import { useEffect, useState } from 'react'

import Ranking from '../Ranking'

import * as styles from './styles.css'

const Calendar = () => {
    const today = new Date()
    const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
    const day = week[today.getDay()]
    const currentDate = today.getDate()
    const dayNames = ['일', '월', '화', '수', '목', '금', '토']
    const date = [
        currentDate - 3,
        currentDate - 2,
        currentDate - 1,
        currentDate,
        currentDate + 1,
        currentDate + 2,
        currentDate + 3,
    ]
    const [isLoading] = useState()
    const [active, setActive] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((current) => (current + 1) % 3)
        }, 3000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.textWrapper}>오늘, {day}</div>
                <div className={styles.dateWrapper}>{today.toLocaleDateString('ko-KR')}</div>
            </div>

            <div className={styles.weekDays}>
                <div className={styles.weekend}>{dayNames[0]}</div>
                <div>{dayNames[1]}</div>
                <div>{dayNames[2]}</div>
                <div>{dayNames[3]}</div>
                <div>{dayNames[4]}</div>
                <div>{dayNames[5]}</div>
                <div className={styles.weekend}>{dayNames[6]}</div>
            </div>

            <div className={styles.days}>
                <div className={styles.weekend}>{date[0]}</div>
                <div>{date[1]}</div>
                <div>{date[2]}</div>
                <div className={styles.today}>{currentDate}</div>
                <div>{date[4]}</div>
                <div>{date[5]}</div>
                <div className={styles.weekend}>{date[6]}</div>
            </div>

            <div className={styles.divider} />

            <Ranking
                rankingData={[
                    {
                        id: 1,
                        ranking: '🥇',
                        message: '74나 3957 (49km)',
                        isActive: active === 0,
                    },
                    {
                        id: 2,
                        ranking: '🥈',
                        message: '45가 5858 (42km)',
                        isActive: active === 1,
                    },
                    {
                        id: 3,
                        ranking: '🥉',
                        message: '38모 1537 (38Km)',
                        isActive: active === 2,
                    },
                ]}
                isLoading={isLoading}
            />
        </div>
    )
}

export default Calendar
