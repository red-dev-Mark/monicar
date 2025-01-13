import React from 'react'

import * as styles from './styles.css'

interface CalendarModel {
    id: number
    message: string
    isActive?: boolean
}

interface CalendarProps {
    calendarData: CalendarModel[]
}

const Calendar = ({ calendarData }: CalendarProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.textWrapper}>오늘, 수요일</div>
                <div className={styles.dateWrapper}>2025.01.15</div>
            </div>

            <div className={styles.weekDays}>
                <div className={styles.weekendDay}>일</div>
                <div>월</div>
                <div>화</div>
                <div>수</div>
                <div>목</div>
                <div>금</div>
                <div className={styles.weekendDay}>토</div>
            </div>

            <div className={styles.days}>
                <div className={styles.weekendDate}>12</div>
                <div>13</div>
                <div>14</div>
                <div className={styles.today}>15</div>
                <div>16</div>
                <div>17</div>
                <div className={styles.weekendDate}>18</div>
            </div>

            <div className={styles.divider} />

            <div className={styles.messageContainer}>
                <div className={styles.verticalLine} />
                <div className={styles.messageList}>
                    {calendarData.map((data) => (
                        <div key={data.id} className={styles.messageWrapper}>
                            <div className={`${styles.dot} ${data.isActive ? styles.activeDot : ''}`} />
                            <div className={`${styles.message} ${data.isActive ? styles.activeMessageWrapper : ''}`}>
                                {data.message}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Calendar
