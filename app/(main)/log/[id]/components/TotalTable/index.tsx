import { formatDistance } from '@/lib/utils/format'

import * as styles from './styles.css'

interface TotalTable {
    taxPeriodDistance?: number
    taxPeriodBusinessDistance?: number
    businessUseRatio?: number
}

const TotalTable = ({ taxPeriodDistance = 0, taxPeriodBusinessDistance = 0, businessUseRatio = 0 }: TotalTable) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th scope='row' className={styles.tableHeader}>
                        과세기간 총 주행 거리
                    </th>
                    <td className={styles.tableCell}>{formatDistance(taxPeriodDistance)}</td>
                    <th scope='row' className={styles.tableHeader}>
                        과세기간 업무용 사용 거리
                    </th>
                    <td className={styles.tableCell}>{formatDistance(taxPeriodBusinessDistance)}</td>
                    <th scope='row' className={styles.tableHeader}>
                        업무사용비율
                    </th>
                    <td className={styles.tableCell}>{businessUseRatio || 0}%</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TotalTable
