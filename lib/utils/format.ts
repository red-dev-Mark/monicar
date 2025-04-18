// number를 천단위 구분자(,)가 있는 형식으로 변환 (예: 1000 -> 1,000)
export const formatWithCommas = (value: number) => value.toLocaleString()

// MM을 60분 단위로, HH시간 MM분
export const formatMinuteToHour = (minute: number) => {
    const hour = Math.floor(minute / 60).toLocaleString()
    const formattedMinute = Number(minute) % 60

    return formattedMinute === 0 ? `${hour}시간` : `${hour}시간 ${formattedMinute}분`
}

// 거리 데이터를 포맷팅하는 함수
export const formatDistance = (distance: number) => `${Math.floor((distance || 0) / 1000).toLocaleString('ko-KR')}km`
