import { useQuery } from '@tanstack/react-query'

import { vehicleAPI } from '@/lib/apis'
import { minutesToStaleTime, queryKeys } from '@/lib/utils/tanstack'
import { Result } from '@/types/apis/common'
import { VehicleStatus } from '@/types/vehicle'

export const useVehicleStatus = () => {
    return useQuery<Result<VehicleStatus>, Error, VehicleStatus>({
        queryKey: queryKeys.vehicle.status,
        queryFn: vehicleAPI.getVehicleStatus,
        select: (result) => {
            if (!result.isSuccess || !result.data) {
                throw new Error(result.error)
            }

            // if (!result.data) {
            //     return { allVehicles: 0, engineOnVehicles: 0, engineOffVehicles: 0 }
            // }

            return result.data
        },
        staleTime: minutesToStaleTime(10),
    })
}
