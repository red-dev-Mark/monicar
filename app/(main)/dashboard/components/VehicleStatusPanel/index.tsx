import { useEffect, useState } from 'react'

import VehicleStatusItem from '@/app/(main)/dashboard/components/VehicleStatusItem'
import { useLoading } from '@/hooks/useLoading'
import { vehicleService } from '@/lib/apis'
import { vars } from '@/styles/theme.css'
import { VehicleStatus } from '@/types/vehicle'

import * as styles from './styles.css'

// TODO: location VehicleStatusPanel 컴포넌트와 통합해보기
const VehicleStatusPanel = () => {
    const [vehicleStatus, setVehicleStatus] = useState<VehicleStatus>()
    const [isLoading, startLoading, finishLoading] = useLoading()

    useEffect(() => {
        const getVehicleStatus = async () => {
            try {
                startLoading()
                const result = await vehicleService.getVehicleStatus()
                if (!result.isSuccess) throw new Error(result.error)

                const vehicleStatus = result.data
                setVehicleStatus(vehicleStatus)
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message)
                }
            } finally {
                finishLoading()
            }
        }
        getVehicleStatus()
    }, [])

    const getVehicleCount = (value: number | undefined) => (!isLoading && value ? value : 0)

    const allVehicles = getVehicleCount(vehicleStatus?.allVehicles)
    const engineOnVehicles = getVehicleCount(vehicleStatus?.engineOnVehicles)
    const engineOffVehicles = getVehicleCount(vehicleStatus?.engineOffVehicles)

    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>차량현황</div>
            <VehicleStatusItem total={allVehicles} current={allVehicles} color={vars.colors.primary}>
                전체 차량
            </VehicleStatusItem>

            <VehicleStatusItem total={allVehicles} current={engineOnVehicles} color={vars.colors.green[500]}>
                운행중 차량
            </VehicleStatusItem>

            <VehicleStatusItem total={allVehicles} current={engineOffVehicles} color={vars.colors.blue}>
                미운행 차량
            </VehicleStatusItem>
        </div>
    )
}

export default VehicleStatusPanel
