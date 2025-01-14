import { DateTime, SearchableDateTime } from '@/app/route/types/date'
import { formatToISODate } from '@/lib/utils/date'

// 차량번호 유효성 검증
export const validateVehicleNumber = (searchTerm: string) => {
    if (!searchTerm?.trim()) {
        return {
            isValid: false,
            message: '차량번호를 입력해주세요.',
        }
    }

    const removedBlank = searchTerm.trim().replace(/\s/g, '')

    const hasOnlyKoreanAndNumber = /^[\u3131-\uD79D0-9]+$/.test(removedBlank)

    if (!hasOnlyKoreanAndNumber) {
        return {
            isValid: false,
            message: '차량번호는 숫자/한글만 입력 가능합니다.',
        }
    }

    const isValidFormat = /^(\d{2}|\d{3})[가-힣]\d{4}$/.test(removedBlank)

    if (!isValidFormat) {
        return {
            isValid: false,
            message: '올바른 차량번호 형식이 아닙니다.',
        }
    }

    return {
        isValid: true,
        value: removedBlank,
    }
}

// 기간검색 날짜 유효성 검증
export const validateDateSelection = (startDate: DateTime, endDate: DateTime, searchableRange: SearchableDateTime) => {
    // 윤년 체크 (e.g. 2월 31일)
    const isValidDate = () => {
        const newStartDate = new Date(Number(startDate.year), Number(startDate.month) - 1, Number(startDate.date))
        const newEndDate = new Date(Number(startDate.year), Number(startDate.month) - 1, Number(startDate.date))
        return (
            newStartDate.getMonth() === Number(startDate.month) - 1 &&
            newEndDate.getMonth() === Number(endDate.month) - 1
        )
    }

    // 모든 Select 체크 유무
    const isAllSelected = () => Object.values(startDate).every(Boolean) && Object.values(endDate).every(Boolean)

    // 조회 가능 기간 내 선택 유무
    const isWithSearchableRange = () => {
        const newStartDate = new Date(formatToISODate(startDate)).getTime()
        const newEndDate = new Date(formatToISODate(endDate)).getTime()
        const searchableStartDate = new Date(searchableRange.firstDateAt).getTime()
        const searchableEndDate = new Date(searchableRange.lastDateAt).getTime()

        return searchableStartDate <= newStartDate && searchableEndDate >= newEndDate
    }

    // 시작일시는 종료일시보다 이전이여야 함
    const isValidSelectRange = () => {
        const newStartDate = new Date(formatToISODate(startDate)).getTime()
        const newEndDate = new Date(formatToISODate(endDate)).getTime()

        return newStartDate < newEndDate
    }

    return {
        isValidDate,
        isAllSelected,
        isWithSearchableRange,
        isValidSelectRange,
    }
}
