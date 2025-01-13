'use client'

import SearchInput from '@/components/common/Input/SearchInput'

import Map from './(dashboard)/location/components/Map'
import Calendar from './components/Calendar'
import InspectionStatus from './components/InspectionStatus'
import NoticeBoard from './components/NoticeBoard'
import VehicleStatus from './components/VehicleStatus'
import * as styles from './styles.css'

const HomePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <div className={styles.headerWrapper}>
                    <div className={styles.textWrapper}>
                        <span>안녕하세요,</span>
                        <span className={styles.secondLine}>쏘카님👋</span>
                    </div>
                    <div className={styles.searchInputWrapper}>
                        <SearchInput icon={'/icons/search-icon.svg'}></SearchInput>
                    </div>
                </div>
                <div className={styles.inspectionStatusWrapper}>
                    <InspectionStatus inspectionStatusData={[]} />
                </div>
                <div className={styles.vehicleStatusWrapper}>
                    <VehicleStatus vehicleStatusData={[]} />
                </div>
                <div className={styles.mapWrapper}>
                    <Map></Map>
                </div>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.calendarWrapper}>
                    <Calendar calendarData={[]} />
                </div>
                <div className={styles.noticeBoardWrapper}>
                    <NoticeBoard noticeBoardData={[]} />
                </div>
            </div>
        </div>
    )
}

export default HomePage
