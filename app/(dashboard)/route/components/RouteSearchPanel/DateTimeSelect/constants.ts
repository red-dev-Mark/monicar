const currentYear = new Date().getFullYear()

// 년도 데이터 (2000년부터 현재까지)
export const YEAR_OPTIONS = Array.from({ length: currentYear - 2000 + 1 }, (_, i) => ({
    value: String(currentYear - i),
    label: `${currentYear - i}년`,
}))

// 월 데이터 (1-12월)
export const MONTH_OPTIONS = Array.from({ length: 12 }, (_, i) => ({
    value: String(i + 1).padStart(2, '0'),
    label: `${String(i + 1).padStart(2, '0')}월`,
}))

// 일 데이터 (1-31일)
export const DAY_OPTIONS = Array.from({ length: 31 }, (_, i) => ({
    value: String(i + 1).padStart(2, '0'),
    label: `${String(i + 1).padStart(2, '0')}일`,
}))

// 시간 데이터 (00-23시)
export const HOUR_OPTIONS = Array.from({ length: 24 }, (_, i) => ({
    value: String(i).padStart(2, '0'),
    label: `${String(i).padStart(2, '0')}시`,
}))

// 분 데이터 (10분 단위)
export const MINUTE_OPTIONS = [
    { value: '00', label: '0분' },
    { value: '10', label: '10분' },
    { value: '20', label: '20분' },
    { value: '30', label: '30분' },
    { value: '40', label: '40분' },
    { value: '50', label: '50분' },
]
