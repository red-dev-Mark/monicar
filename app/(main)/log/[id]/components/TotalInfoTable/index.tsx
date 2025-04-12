import { Table } from '@/components/common/Table'
import { TableCell } from '@/components/common/TableCell'
import TableHeader from '@/components/common/TableHeader'
import { formatDistance } from '@/lib/utils/format'

interface TotalInfoTableProps {
    taxPeriodDistance?: number
    taxPeriodBusinessDistance?: number
    businessUseRatio?: number
}

const TotalInfoTable = ({
    taxPeriodDistance = 0,
    taxPeriodBusinessDistance = 0,
    businessUseRatio = 0,
}: TotalInfoTableProps) => {
    return (
        <Table>
            <tr>
                <TableHeader scope='row'>과세기간 총 주행 거리</TableHeader>
                <TableCell>{formatDistance(taxPeriodDistance)}</TableCell>
                <TableHeader scope='row'>과세기간 업무용 사용 거리</TableHeader>
                <TableCell>{formatDistance(taxPeriodBusinessDistance)}</TableCell>
                <TableHeader scope='row'>업무사용비율</TableHeader>
                <TableCell>{businessUseRatio}%</TableCell>
            </tr>
        </Table>
    )
}

export default TotalInfoTable
