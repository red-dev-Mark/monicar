import { RingProgress } from '@mantine/core'

import { vars } from '@/styles/theme.css'
import { InspectionStatusType } from '@/types/vehicle'

import InspectionStatusItem from '../InspectionStatusItem'

import * as styles from './styles.css'

const InspectionStatusPanel = ({ data }: { data: InspectionStatusType | undefined }) => {
    const total = (data?.[0]?.count || 0) + (data?.[1]?.count || 0) + (data?.[2]?.count || 0) + (data?.[3]?.count || 0)

    return (
        <div className={styles.container}>
            <div className={styles.ringProgressWrapper}>
                <RingProgress
                    transitionDuration={2000}
                    size={100}
                    thickness={14}
                    roundCaps
                    sections={[
                        { value: 20, color: '#FF385C', tooltip: '점검 필요' },
                        { value: 40, color: '#FF4086', tooltip: '점검 예정' },
                        { value: 20, color: '#FFC6DB', tooltip: '점검 진행' },
                        { value: 10, color: '#FFE7F0', tooltip: '점검 완료' },
                    ]}
                />
            </div>
            <div className={styles.inspectionStatusItem}>
                <InspectionStatusItem total={total} current={data?.[0]?.count || 0} color={vars.colors.primary}>
                    점검 필요
                </InspectionStatusItem>
                <InspectionStatusItem total={total} current={data?.[1]?.count || 0} color={vars.colors.progress[300]}>
                    점검 예정
                </InspectionStatusItem>
                <InspectionStatusItem total={total} current={data?.[2]?.count || 0} color={vars.colors.progress[200]}>
                    점검 진행
                </InspectionStatusItem>
                <InspectionStatusItem total={total} current={data?.[3]?.count || 0} color={vars.colors.progress[100]}>
                    점검 완료
                </InspectionStatusItem>
            </div>
        </div>
    )
}

export default InspectionStatusPanel
