import { useQuery } from '@tanstack/react-query'

import { vehicleService } from '@/lib/apis'
import { minutesToStaleTime, queryKeys } from '@/lib/utils/tanstack'
import { Result } from '@/types/apis/common'
import { VehicleStatus } from '@/types/vehicle'

export const useVehicleStatus = () => {
    return useQuery<Result<VehicleStatus>, Error, VehicleStatus>({
        queryKey: queryKeys.vehicle.status,
        queryFn: vehicleService.getVehicleStatus,
        placeholderData: { isSuccess: true, data: { allVehicles: 0, engineOnVehicles: 0, engineOffVehicles: 0 } },
        select: (result) => {
            if (!result.isSuccess) {
                throw new Error(result.error)
            }

            if (!result.data) {
                return { allVehicles: 0, engineOnVehicles: 0, engineOffVehicles: 0 }
            }

            return result.data
        },
        staleTime: minutesToStaleTime(10),
    })
}
