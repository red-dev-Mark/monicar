// number를 천단위 구분자(,)가 있는 형식으로 변환 (예: 1000 -> 1,000)
export const formatWithCommas = (value: number) => value.toLocaleString()

//
export const formatMinuteToHour = (minute: number) => {
    const hour = minute / 60
    const formattedMinute = Number(minute) % 60

    return `${hour}시간 ${formattedMinute}분`
}
