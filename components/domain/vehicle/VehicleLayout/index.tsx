import * as styles from './styles.css'

interface VehicleLayoutProps {
    imageUrl: React.ReactNode
    children: React.ReactNode
}

const VehicleLayout = ({ imageUrl, children }: VehicleLayoutProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageUrlWrapper}>{imageUrl}</div>
            <div className={styles.childrenWrapper}>{children}</div>
        </div>
    )
}

export default VehicleLayout
