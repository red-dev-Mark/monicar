import { Progress } from '@mantine/core'
import { useEffect, useState } from 'react'

import { vehicleAPI } from '@/lib/apis'
import { vars } from '@/styles/theme.css'
import { VehicleStatusModel } from '@/types/vehicle'

import * as styles from './styles.css'

const VehicleStatus = () => {
    const [vehicleStatus, setVehicleStatus] = useState<VehicleStatusModel>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getVehicleStatus = async () => {
            try {
                setIsLoading(true)
                const vehicleStatus = await vehicleAPI.getVehicleStatus()
                setVehicleStatus(vehicleStatus)
            } catch (error) {
                console.error('차량현황 조회에 실패하였습니다', error)
            } finally {
                setIsLoading(false)
            }
        }
        getVehicleStatus()
    }, [])

    console.log(vehicleStatus)

    // if (isLoading || !vehicleStatus) return

    return (
        <div className={styles.container}>
            <div className={styles.statusItem}>
                <span className={styles.circle} style={{ background: vars.colors.pink[600] }} />
                <p className={styles.title}>
                    전체 차량 <span className={styles.count}>{`( ${isLoading ? 0 : 20} )`}</span>
                </p>
                <div className={styles.progressWrapper}>
                    <Progress color={vars.colors.pink[600]} radius='md' size='lg' value={isLoading ? 0 : 80} />
                </div>
            </div>

            <div className={styles.statusItem}>
                <span className={styles.circle} style={{ background: vars.colors.green[500] }} />
                <p className={styles.title}>
                    운행중 차량 <span className={styles.count}>{`( ${isLoading ? 0 : 20} )`}</span>
                </p>
                <div className={styles.progressWrapper}>
                    <Progress color={vars.colors.green[500]} radius='md' size='lg' value={isLoading ? 0 : 80} />
                </div>
            </div>

            <div className={styles.statusItem}>
                <span className={styles.circle} style={{ background: vars.colors.blue }} />
                <p className={styles.title}>
                    미운행 차량 <span className={styles.count}>{`( ${isLoading ? 0 : 20} )`}</span>
                </p>
                <div className={styles.progressWrapper}>
                    <Progress color={vars.colors.blue} radius='md' size='lg' value={isLoading ? 0 : 80} />
                </div>
            </div>
        </div>
    )
}

export default VehicleStatus
