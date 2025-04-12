import { Suspense } from 'react'

import DetailSkeleton from '@/components/common/Skeleton/DetailSkeleton'
import { formatDistance } from '@/lib/utils/format'

import * as styles from './styles.css'

interface DrivingRecord {
    id: number
    usageDate: string
    user: {
        departmentName: string
        name: string
    }
    drivingInfo: {
        drivingBefore: number
        drivingAfter: number
        totalDriving: number
        notes: string
        businessDrivingDetails: {
            usePurpose: string
            drivingDistance: number
        }
    }
}

interface DrivingInfoTableProps {
    records?: DrivingRecord[]
}

const DrivingInfoTable = ({ records = [] }: DrivingInfoTableProps) => {
    return (
        <div>
            {' '}
            <table>
                <tbody>
                    <tr>
                        <th scope='row' rowSpan={2} className={styles.tableHeader}>
                            사용일자
                        </th>
                        <th scope='row' colSpan={8} className={styles.tableHeader}>
                            운행내역
                        </th>
                    </tr>
                    <tr>
                        <th scope='row' className={styles.tableHeader}>
                            부서
                        </th>
                        <th scope='row' className={styles.tableHeader}>
                            성명
                        </th>
                        <th scope='row' className={styles.tableHeader}>
                            전 계기판 거리
                        </th>
                        <th scope='row' className={styles.tableHeader}>
                            후 계기판 거리
                        </th>
                        <th scope='row' className={styles.tableHeader}>
                            주행거리
                        </th>
                        <th scope='row' className={styles.tableHeader}>
                            출근용
                        </th>
                        <th scope='row' className={styles.tableHeader}>
                            일반업무용
                        </th>
                        <th scope='row' className={styles.tableHeader}>
                            비고
                        </th>
                    </tr>
                    <Suspense fallback={<DetailSkeleton />}>
                        {records.length === 0 ? (
                            <tr>
                                <td colSpan={9}>
                                    <div className={styles.empty}>운행내역이 없습니다.</div>
                                </td>
                            </tr>
                        ) : (
                            records.map((data) => {
                                const isCommutePurpose =
                                    data.drivingInfo.businessDrivingDetails.usePurpose === 'COMMUTE'
                                const drivingDistance = data.drivingInfo.businessDrivingDetails.drivingDistance

                                return (
                                    <tr key={data.id}>
                                        <td className={styles.tableCell}>{data.usageDate}</td>
                                        <td className={styles.tableCell}>{data.user.departmentName}</td>
                                        <td className={styles.tableCell}>{data.user.name}</td>
                                        <td className={styles.tableCell}>
                                            {formatDistance(data.drivingInfo.drivingBefore)}
                                        </td>
                                        <td className={styles.tableCell}>
                                            {formatDistance(data.drivingInfo.drivingAfter)}
                                        </td>
                                        <td className={styles.tableCell}>
                                            {formatDistance(data.drivingInfo.totalDriving)}
                                        </td>
                                        <td className={styles.tableCell}>
                                            {isCommutePurpose ? formatDistance(drivingDistance) : '0km'}
                                        </td>
                                        <td className={styles.tableCell}>
                                            {!isCommutePurpose ? formatDistance(drivingDistance) : '0km'}
                                        </td>
                                        <td className={styles.tableCell}>{data.drivingInfo.notes}</td>
                                    </tr>
                                )
                            })
                        )}
                    </Suspense>
                </tbody>
            </table>
        </div>
    )
}

export default DrivingInfoTable
