import { RingProgress } from '@mantine/core'

import { vars } from '@/styles/theme.css'
import { InspectionStatusType } from '@/types/vehicle'

import InspectionStatusItem from '../InspectionStatusItem'

import * as styles from './styles.css'

const InspectionStatusPanel = ({ statusData }: { statusData: InspectionStatusType | undefined }) => {
    const total = statusData ? Object.values(statusData).reduce((acc, curr) => acc + curr, 0) : 0
    const ringProgressValue = (value: number | undefined) => {
        if (!value || total === 0) {
            return 0
        }
        return (value / total) * 100
    }

    return (
        <div className={styles.container}>
            <div className={styles.ringProgressWrapper}>
                <RingProgress
                    transitionDuration={2000}
                    size={100}
                    thickness={14}
                    roundCaps
                    sections={[
                        { value: ringProgressValue(statusData?.required), color: '#FF385C', tooltip: '점검 필요' },
                        { value: ringProgressValue(statusData?.scheduled), color: '#FF4086', tooltip: '점검 예정' },
                        { value: ringProgressValue(statusData?.inProgress), color: '#FFC6DB', tooltip: '점검 진행' },
                        { value: ringProgressValue(statusData?.completed), color: '#FFE7F0', tooltip: '점검 완료' },
                    ]}
                />
            </div>
            <div className={styles.inspectionStatusItem}>
                <InspectionStatusItem total={total} current={statusData?.required || 0} color={vars.colors.primary}>
                    점검 필요
                </InspectionStatusItem>
                <InspectionStatusItem
                    total={total}
                    current={statusData?.scheduled || 0}
                    color={vars.colors.progress[300]}
                >
                    점검 예정
                </InspectionStatusItem>
                <InspectionStatusItem
                    total={total}
                    current={statusData?.inProgress || 0}
                    color={vars.colors.progress[200]}
                >
                    점검 진행
                </InspectionStatusItem>
                <InspectionStatusItem
                    total={total}
                    current={statusData?.completed || 0}
                    color={vars.colors.progress[100]}
                >
                    점검 완료
                </InspectionStatusItem>
            </div>
        </div>
    )
}

export default InspectionStatusPanel
