import * as styles from './styles.css'

type StatusType = 'REQUIRED' | 'SCHEDULED' | 'INPROGRESS' | 'COMPLETED'
type IconType = 'bell' | 'alert' | 'button' | 'check'

export interface InspectionStatusAlarmModel {
    status: StatusType
    iconType: IconType
    icon: React.ReactNode
    title: string
    vehicleNumber: string
    message: string
}

interface InspectionStatusAlarmProps {
    inspectionStatusData: InspectionStatusAlarmModel[]
    isOpen?: boolean
}

const InspectionStatusAlarm = ({ inspectionStatusData, isOpen = true }: InspectionStatusAlarmProps) => {
    if (!isOpen) return null

    return (
        <>
            <div className={styles.container} role='alert'>
                {inspectionStatusData?.map((data) => {
                    return (
                        <div
                            key={data.status}
                            className={styles.statusCard({
                                status: data.status,
                            })}
                        >
                            <div>
                                <div className={styles.iconWrapper[data.iconType]}>
                                    <div className={styles.icon}>{data.icon}</div>
                                </div>
                            </div>

                            <div>
                                <div className={styles.title}>{data.title}</div>
                                <div className={styles.vehicleNumber}>{data.vehicleNumber}</div>
                                <div className={styles.message}>{data.message}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default InspectionStatusAlarm
