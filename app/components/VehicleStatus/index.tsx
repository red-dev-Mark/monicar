import * as styles from './styles.css'

type StatusType = 'total' | 'active' | 'inactive' | 'disabled'

type StatusItemType = {
    type: StatusType
    text: string
}

const VehicleStatus = () => {
    const statusItems: StatusItemType[] = [
        { type: 'total', text: '전체 차량' },
        { type: 'active', text: '운행중 차량' },
        { type: 'inactive', text: '미운행 차량' },
        { type: 'disabled', text: '미관제 차량' },
    ]

    return (
        <div className={styles.container}>
            {statusItems.map((item) => (
                <div key={item.type} className={styles.statusRow}>
                    <div className={styles.dots[item.type]} />
                    <span className={styles.text}>{item.text}</span>
                    <div className={styles.statusBars[item.type]} />
                </div>
            ))}
        </div>
    )
}

export default VehicleStatus
