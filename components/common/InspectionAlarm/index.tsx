import { alarmTitle } from '@/constants/inspection'
import { useSseAlarm } from '@/hooks/useSseAlarm'
import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { WhiteAlertIcon, WhiteBellIcon, WhiteCheckIcon, WhiteOnButtonIcon } from '@/public/icons'

import * as styles from './styles.css'

const InspectionAlarm = () => {
    const { alarms, error } = useSseAlarm()

    console.log('alarms', alarms)

    const alarmIcon = {
        REQUIRED: <WhiteBellIcon />,
        SCHEDULED: <WhiteAlertIcon />,
        INPROGRESS: <WhiteOnButtonIcon />,
        COMPLETED: <WhiteCheckIcon />,
    }

    if (error) {
        return
    }

    return (
        <div className={styles.container} role='alert'>
            {alarms?.map((alarm) => {
                const vehicleNumber = addSpaceVehicleNumber(alarm.vehicleNumber)
                return (
                    <div key={alarm.id} className={styles.statusCard({ status: alarm.status })}>
                        <div className={styles.iconWrapper[alarm.status]}>
                            <div className={styles.icon}>{alarmIcon[alarm.status]}</div>
                        </div>

                        <div>
                            <div className={styles.title}>{alarmTitle[alarm.status]}</div>
                            <div className={styles.vehicleNumber}>{vehicleNumber}</div>
                            {alarm.drivingDistance && (
                                <div className={styles.message}>{alarm.drivingDistance.toLocaleString('ko-KR')}km</div>
                            )}
                            {alarm.managerName && <div className={styles.message}>{alarm.managerName}</div>}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default InspectionAlarm
