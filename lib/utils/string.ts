// 123가1234 -> 123가 1234 (띄어쓰기 추가)
export const addSpaceVehicleNumber = (vehicleNumber: string) => vehicleNumber.replace(/([가-힣])/, '$1 ')

// 문자열 중간 공백 삭제
export const removeSpaces = (value: string) => value.trim().replace(/\s/g, '')
