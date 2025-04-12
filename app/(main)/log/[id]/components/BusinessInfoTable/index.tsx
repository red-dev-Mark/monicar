import * as styles from './styles.css'

interface BusinessInfoTable {
    taxStartPeriod?: string
    taxEndPeriod?: string
    businessName?: string
    businessRegistrationNumber?: string
}

const BusinessInfoTable = ({
    taxStartPeriod,
    taxEndPeriod,
    businessName,
    businessRegistrationNumber,
}: BusinessInfoTable) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th scope='row' rowSpan={3} className={styles.tableHeader}>
                            과세기간
                        </th>
                        <td rowSpan={3} className={styles.tableCell}>
                            {taxStartPeriod || '-'} - {taxEndPeriod || '-'}
                        </td>
                        <th scope='row' rowSpan={2} className={styles.tableHeader}>
                            업무승용차 운행기록부
                        </th>
                        <th scope='row' className={styles.tableHeader}>
                            상호명
                        </th>
                        <td className={styles.tableCell}>{businessName || '-'}</td>
                    </tr>
                    <tr>
                        <th scope='row' className={styles.tableHeader}>
                            사업자 등록번호
                        </th>
                        <td className={styles.tableCell}>{businessRegistrationNumber || '-'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BusinessInfoTable
