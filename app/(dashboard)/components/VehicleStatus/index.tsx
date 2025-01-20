import * as styles from './styles.css'

type StatusType = 'total' | 'active' | 'inactive' | 'disabled'

interface VehicleStatusModel {
    type: StatusType
    text: string
}

interface VehicleStatusProps {
    vehicleStatusData: VehicleStatusModel[]
}

const VehicleStatus = ({ vehicleStatusData }: VehicleStatusProps) => {
    return (
        <div className={styles.container}>
            {vehicleStatusData.map((data) => (
                <div key={data.type} className={styles.statusRow}>
                    <div className={styles.dots[data.type]} />
                    <span className={styles.text}>{data.text}</span>
                    <div className={styles.statusBars[data.type]} />
                </div>
            ))}
        </div>
    )
}

export default VehicleStatus
