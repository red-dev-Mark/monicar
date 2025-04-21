import { vehicleAPI } from '@/lib/apis'
import { validateVehicleNumber } from '@/lib/utils/validation'
import { Vehicle } from '@/types/vehicle'

export const getVehicleOperationInfo = async (
    vehicleNumber: string,
    onError: (message: string) => void,
): Promise<Vehicle | null> => {
    const validation = validateVehicleNumber(vehicleNumber)
    if (!validation.isValid) {
        onError?.(validation.message!)
        return null
    }

    const result = await vehicleAPI.getVehicleOperationPeriod(vehicleNumber)
    if (!result.isSuccess) {
        onError?.(result.error!)
    }

    return result.data!
}

// export const getVehicleInfo = async (vehicleNumber: string): Promise<Result<VehicleLocation>> => {
//     const validation = validateVehicleNumber(vehicleNumber)
//     if (!validation.isValid) {
//         return { isSuccess: false, error: validation.message! }
//     }

//     const result = await vehicleAPI.getVehicleInfo(vehicleNumber)
//     if (!result.isSuccess) {
//         return { isSuccess: false, error: result.error as string }
//     }

//     const vehicleInfo = result.data

//     return {
//         isSuccess: true,
//         data: vehicleInfo,
//     }
// }
