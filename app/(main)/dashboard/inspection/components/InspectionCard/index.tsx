import * as styles from './styles.css'

type StatusType = 'REQUIRED' | 'SCHEDULED' | 'INPROGRESS' | 'COMPLETED'

interface InspectionCardProps {
    icon: React.ReactNode
    title: string
    description?: string | number
    actionButton: React.ReactNode
    status: StatusType
}

const InspectionCard = ({ icon, title, description, actionButton, status }: InspectionCardProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.iconWrapper[status]}>
                <div className={styles.icon}>{icon}</div>
            </div>

            <div>
                <p className={styles.title}>{title}</p>
                {!!description && <p className={styles.description}>{description}</p>}
            </div>

            <div className={styles.button}>{actionButton}</div>
        </div>
    )
}

export default InspectionCard
