import * as styles from './styles.css'

interface VehicleInfoTableProps {
    vehicleNumber: string
    vehicleModel?: string
    isLoading: boolean
}

const VehicleInfoTable = ({ vehicleNumber, vehicleModel, isLoading }: VehicleInfoTableProps) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th scope='row' className={styles.tableHeader}>
                            자동차 등록번호
                        </th>
                        <th scope='row' className={styles.tableHeader}>
                            차량종류
                        </th>
                    </tr>
                    <tr>
                        <td className={styles.tableCell}>{vehicleNumber || (isLoading ? '' : '-')}</td>
                        <td className={styles.tableCell}>{vehicleModel || (isLoading ? '' : '-')}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default VehicleInfoTable
