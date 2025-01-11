// 2024-01-15T09:30:00 -> 2024년 01월 15일 09시 30분
export const formatDateToKorean = (isoDate: string) => {
    const [ymd, time] = isoDate.split('T')
    const [year, month, date] = ymd.split('-')
    const [hour, minute] = time.split(':')

    return `${year}년 ${month}월 ${date}일 ${hour}시 ${minute}분`
}
