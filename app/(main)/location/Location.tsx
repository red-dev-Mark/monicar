'use client'

import MapSection from '@/app/(main)/location/components/MapSection'
import VehicleStatusPanel from '@/app/(main)/location/components/VehicleStatusPanel'

import * as styles from './styles.css'

const Location = () => {
    return (
        <div className={styles.container}>
            <MapSection />
            <VehicleStatusPanel />
        </div>
    )
}

export default Location
