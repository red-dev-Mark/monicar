import React from 'react'

import Progress from '@/app/(main)/location/components/VehicleStatusItem'
import { vars } from '@/styles/theme.css'

import * as styles from './styles.css'

const VehicleStatusPanel = () => {
    // TODO: 추후 API 연동
    const allVehicles = 15000
    const engineOnVehicles = 8650
    const engineOffVehicles = 6320

    return (
        <div className={styles.container}>
            <Progress total={allVehicles} current={allVehicles} color={vars.colors.primary}>
                전체차량
            </Progress>

            <Progress total={allVehicles} current={engineOnVehicles} color={vars.colors.green[500]}>
                운행중
            </Progress>

            <Progress total={allVehicles} current={engineOffVehicles} color={vars.colors.blue}>
                미운행
            </Progress>
        </div>
    )
}

export default VehicleStatusPanel
