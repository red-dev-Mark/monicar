import { DateTime, SearchableDateTime } from '@/app/(dashboard)/route/types/date'
import { formatToISODate } from '@/lib/utils/date'

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

export const validateDateRange = (startDate: DateTime, endDate: DateTime, searchableRange: SearchableDateTime) => {
    const isAllSelected = () => Object.values(startDate).every(Boolean) && Object.values(endDate).every(Boolean)

    const isWithSearchableRange = () => {
        const newStartDate = new Date(formatToISODate(startDate)).getTime()
        const newEndDate = new Date(formatToISODate(endDate)).getTime()
        const searchableStartDate = new Date(searchableRange.firstDateAt).getTime()
        const searchableEndDate = new Date(searchableRange.lastDateAt).getTime()

        return searchableStartDate <= newStartDate && searchableEndDate >= newEndDate
    }

    const isValidSelectRange = () => {
        const newStartDate = new Date(formatToISODate(startDate)).getTime()
        const newEndDate = new Date(formatToISODate(endDate)).getTime()

        return newStartDate < newEndDate
    }

    return {
        isAllSelected,
        isWithSearchableRange,
        isValidSelectRange,
        validate: () => isAllSelected() && isWithSearchableRange() && isValidSelectRange(),
    }
}
