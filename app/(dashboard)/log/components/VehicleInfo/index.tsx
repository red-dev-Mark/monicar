import * as styles from './styles.css'

interface VehicleInfoProps {
    vehicleNumber: string
    vehicleModel: string
}

const VehicleInfo = ({ vehicleNumber, vehicleModel }: VehicleInfoProps) => {
    return (
        <>
            <h3 className={styles.vehicleNumber}>{vehicleNumber}</h3>
            <p className={styles.vehicleModel}>{vehicleModel}</p>
        </>
    )
}

export default VehicleInfo
