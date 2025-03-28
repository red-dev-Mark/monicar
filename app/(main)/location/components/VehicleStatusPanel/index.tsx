import { useQuery } from '@tanstack/react-query'
// import React, { useEffect, useState } from 'react'

import VehicleStatusItem from '@/app/(main)/location/components/VehicleStatusItem'
// import { useLoading } from '@/hooks/useLoading'
import { vehicleService } from '@/lib/apis'
import { vars } from '@/styles/theme.css'
// import { VehicleStatusSummary } from '@/types/vehicle'

import * as styles from './styles.css'

const VehicleStatusPanel = () => {
    // const [vehicleStatus, setVehicleStatus] = useState<VehicleStatusSummary>()
    // const [isLoading, startLoading, finishLoading] = useLoading()

    const {
        data: vehicleStatus,
        // error,
        isLoading,
    } = useQuery({
        queryKey: ['status'],
        queryFn: async () => await vehicleService.getVehicleStatus(),
        // staleTime: 0,
    })

    // useEffect(() => {
    //     const getVehicleStatus = async () => {
    //         try {
    //             startLoading()
    //             const result = await vehicleService.getVehicleStatus()
    //             if (!result.isSuccess) throw new Error(result.error)

    //             const vehicleStatus = result.data
    //             setVehicleStatus(vehicleStatus)
    //         } catch (error) {
    //             if (error instanceof Error) {
    //                 console.error(error.message)
    //             }
    //         } finally {
    //             finishLoading()
    //         }
    //     }
    //     getVehicleStatus()
    // }, [])

    if (isLoading || !vehicleStatus || !vehicleStatus.data) return

    return (
        <div className={styles.container}>
            <VehicleStatusItem
                total={vehicleStatus?.data?.allVehicles}
                current={vehicleStatus?.data?.allVehicles}
                color={vars.colors.primary}
            >
                전체 차량
            </VehicleStatusItem>

            <VehicleStatusItem
                total={vehicleStatus?.data?.allVehicles}
                current={vehicleStatus.data?.engineOnVehicles}
                color={vars.colors.green[500]}
            >
                운행중 차량
            </VehicleStatusItem>

            <VehicleStatusItem
                total={vehicleStatus?.data?.allVehicles}
                current={vehicleStatus.data?.engineOffVehicles}
                color={vars.colors.blue}
            >
                미운행 차량
            </VehicleStatusItem>
        </div>
    )
}

export default VehicleStatusPanel
