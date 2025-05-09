import CountUp from 'react-countup'

import * as styles from './styles.css'

type StatusType = 'REQUIRED' | 'SCHEDULED' | 'INPROGRESS' | 'COMPLETED'
type IconType = 'bell' | 'alert' | 'button' | 'check'

interface InspectionStatusModel {
    status: StatusType
    icon: React.ReactNode
    text: string
    iconType: IconType
    count?: number
    current?: number
    total?: number
}

interface InspectionStatusProps {
    inspectionStatusData: InspectionStatusModel[]
    onStatusClick: (status: StatusType) => void
}

const InspectionStatus = ({ inspectionStatusData, onStatusClick }: InspectionStatusProps) => {
    return (
        <div className={styles.container}>
            {inspectionStatusData.map((data) => (
                <button
                    key={data.status}
                    className={`${styles.statusCard({
                        status: data.status,
                    })} ${styles.mobileStatusCard}`}
                    onClick={() => onStatusClick(data.status)}
                    type='button'
                >
                    <div className={styles.mobileStatusWrapper}>
                        <div className={styles.iconWrapper[data.iconType]}>
                            <div className={styles.icon}>{data.icon}</div>
                            {data.count !== 0 && (
                                <span className={styles.count}>
                                    <CountUp end={Number(data.count)} duration={1} />
                                </span>
                            )}
                        </div>
                        <div className={styles.statusText}>{data.text}</div>
                    </div>
                </button>
            ))}
        </div>
    )
}

export default InspectionStatus
