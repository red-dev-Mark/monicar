import { DateTime, SearchableDateTime } from '@/app/(main)/route/types/date'
import { formatToISODate } from '@/lib/utils/date'
import { removeSpaces } from '@/lib/utils/string'

export const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    if (!email?.trim()) {
        return {
            isValid: false,
            message: '이메일을 입력해주세요',
        }
    }

    if (!emailRegex.test(email)) {
        return {
            isValid: false,
            message: '올바른 이메일 형식이 아닙니다\n(monicar@gmail.com)',
        }
    }

    if (email.length > 50) {
        return {
            isValid: false,
            message: '이메일은 50자를 초과할 수 없습니다',
        }
    }

    return {
        isValid: true,
        value: email,
    }
}

export const validatePassword = (password: string) => {
    if (!password?.trim()) {
        return {
            isValid: false,
            message: '비밀번호를 입력해주세요',
        }
    }

    if (password.length < 4) {
        return {
            isValid: false,
            message: '비밀번호는 최소 4자 이상이어야 합니다',
        }
    }

    if (password.length > 20) {
        return {
            isValid: false,
            message: '비밀번호는 20자를 초과할 수 없습니다',
        }
    }

    return {
        isValid: true,
        value: password,
    }
}

// 차량번호 유효성 검증
export const validateVehicleNumber = (searchTerm: string) => {
    if (!searchTerm?.trim()) {
        return {
            isValid: false,
            message: '차량번호를 입력해주세요.',
        }
    }

    const removedBlank = removeSpaces(searchTerm)

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
