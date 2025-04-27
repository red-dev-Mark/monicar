import { alarmTitle } from '@/constants/inspection'
import { useSubscribe } from '@/hooks/useSubscribe'
import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { WhiteAlertIcon, WhiteBellIcon, WhiteCheckIcon, WhiteOnButtonIcon } from '@/public/icons'

import * as styles from '../Alarm/styles.css'

const Alarm = () => {
    const { alarm, error } = useSubscribe()

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
            {alarm?.map((data) => {
                const vehicleNumber = addSpaceVehicleNumber(data.vehicleNumber)

                return (
                    <div
                        key={data.id}
                        className={styles.statusCard({
                            status: data.status,
                        })}
                    >
                        <div className={styles.iconWrapper[data.status]}>
                            <div className={styles.icon}>{alarmIcon[data.status]}</div>
                        </div>

                        <div>
                            <div className={styles.title}>{alarmTitle[data.status]}</div>
                            <div className={styles.vehicleNumber}>{vehicleNumber}</div>
                            {data.drivingDistance && (
                                <div className={styles.message}>{data.drivingDistance.toLocaleString('ko-KR')}km</div>
                            )}
                            {data.managerName && <div className={styles.message}>{data.managerName}</div>}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Alarm
