import { Suspense } from 'react'

import DetailSkeleton from '@/components/common/Skeleton/DetailSkeleton'
import Table from '@/components/common/Table'
import TableCell from '@/components/common/TableCell'
import TableHeader from '@/components/common/TableHeader'
import { formatDistance } from '@/lib/utils/format'

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
        <Table>
            <tr>
                <TableHeader scope='row' rowSpan={2}>
                    사용일자
                </TableHeader>
                <TableHeader scope='row' colSpan={8}>
                    운행내역
                </TableHeader>
            </tr>
            <tr>
                <TableHeader scope='row'>부서</TableHeader>
                <TableHeader scope='row'>성명</TableHeader>
                <TableHeader scope='row'>전 계기판 거리</TableHeader>
                <TableHeader scope='row'>후 계기판 거리</TableHeader>
                <TableHeader scope='row'>주행거리</TableHeader>
                <TableHeader scope='row'>출근용</TableHeader>
                <TableHeader scope='row'>일반업무용</TableHeader>
                <TableHeader scope='row'>비고</TableHeader>
            </tr>
            <Suspense fallback={<DetailSkeleton />}>
                {records.length === 0 ? (
                    <tr>
                        <TableCell colSpan={9}>
                            <div>운행내역이 없습니다.</div>
                        </TableCell>
                    </tr>
                ) : (
                    records.map((data) => {
                        const isCommutePurpose = data.drivingInfo.businessDrivingDetails.usePurpose === 'COMMUTE'
                        const drivingDistance = data.drivingInfo.businessDrivingDetails.drivingDistance

                        return (
                            <tr key={data.id}>
                                <TableCell>{data.usageDate}</TableCell>
                                <TableCell>{data.user.departmentName}</TableCell>
                                <TableCell>{data.user.name}</TableCell>
                                <TableCell>{formatDistance(data.drivingInfo.drivingBefore)}</TableCell>
                                <TableCell>{formatDistance(data.drivingInfo.drivingAfter)}</TableCell>
                                <TableCell>{formatDistance(data.drivingInfo.totalDriving)}</TableCell>
                                <TableCell>{isCommutePurpose ? formatDistance(drivingDistance) : '0km'}</TableCell>
                                <TableCell>{!isCommutePurpose ? formatDistance(drivingDistance) : '0km'}</TableCell>
                                <TableCell>{data.drivingInfo.notes}</TableCell>
                            </tr>
                        )
                    })
                )}
            </Suspense>
        </Table>
    )
}

export default DrivingInfoTable
