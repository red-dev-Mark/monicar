// 123가1234 -> 123가 1234 (띄어쓰기 추가)
export const addSpaceVehicleNumber = (vehicleNumber: string) => vehicleNumber.replace(/([가-힣])/, '$1 ')
