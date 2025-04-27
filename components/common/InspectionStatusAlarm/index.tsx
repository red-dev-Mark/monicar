import { alarmTitle } from '@/constants/inspection'
import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { WhiteAlertIcon } from '@/public/icons'
import { AlarmResponse } from '@/types/vehicle'

import * as styles from './styles.css'

interface InspectionStatusAlarmProps {
    inspectionStatusData: AlarmResponse[]
    isOpen?: boolean
}

const InspectionStatusAlarm = ({ inspectionStatusData }: InspectionStatusAlarmProps) => {
    // if (!isOpen) return null

    const alarmIcon = {
        REQUIRED: <WhiteAlertIcon />,
        SCHEDULED: <WhiteAlertIcon />,
        INPROGRESS: <WhiteAlertIcon />,
        COMPLETED: <WhiteAlertIcon />,
    }

    return (
        <div className={styles.container} role='alert'>
            {inspectionStatusData?.map((data) => {
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
export default InspectionStatusAlarm
