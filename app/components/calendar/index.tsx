import React from 'react'

import * as styles from './styles.css'

const messages = [
    '즐거운 아침! 음악과 함께 시작.',
    '따뜻한 커피 한 잔은 건강에 좋아요.',
    '점심에는 스트레칭을 해볼까요?',
    '바이오리듬을 지키세요!',
    '눈 오는 날은 차량 운행에 주의하세요.',
]

const Calendar = () => {
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
                    {messages.map((message, index) => (
                        <div key={index} className={styles.messageWrapper}>
                            <div className={`${styles.dot} ${index === 2 ? styles.activeDot : ''}`} />
                            <div className={` ${index === 2 ? styles.activeMessageWrapper : ''}`}>{message}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Calendar
