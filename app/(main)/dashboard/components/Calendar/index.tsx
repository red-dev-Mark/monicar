import * as styles from './styles.css'

interface CalendarModel {
    id: number
    ranking: string
    message: string
    isActive?: boolean
}

interface CalendarProps {
    calendarData: CalendarModel[]
}

const Calendar = ({ calendarData }: CalendarProps) => {
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

            <p className={styles.title}>주행거리 높은 순</p>
            <div className={styles.messageContainer}>
                <div className={styles.messageList}>
                    {calendarData.map((data) => (
                        <div key={data.id} className={styles.messageWrapper}>
                            <div>{data.ranking}</div>
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
