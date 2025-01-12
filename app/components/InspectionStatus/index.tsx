import { WhiteAlertIcon, WhiteBellIcon, WhiteCheckIcon, WhiteOnButtonIcon } from '@/public/icons'

import * as styles from './styles.css'

const statusItems = [
    { status: 'required', Icon: WhiteBellIcon, text: '점검 필요', iconType: 'bell' },
    { status: 'scheduled', Icon: WhiteAlertIcon, text: '점검 예정', iconType: 'alert' },
    { status: 'inProgress', Icon: WhiteOnButtonIcon, text: '점검 진행', iconType: 'button' },
    { status: 'completed', Icon: WhiteCheckIcon, text: '점검완료', iconType: 'check' },
] as const

const InspectionStatus = () => {
    return (
        <div className={styles.container}>
            {statusItems.map(({ status, Icon, text, iconType }) => (
                <div key={status} className={styles.statusCard({ status })}>
                    <div className={styles.iconWrappers[iconType]}>
                        <div className={styles.icon}>
                            <Icon />
                        </div>
                    </div>
                    <div className={styles.statusText}>{text}</div>
                </div>
            ))}
        </div>
    )
}

export default InspectionStatus
