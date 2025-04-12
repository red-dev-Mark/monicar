import { Table } from '@/components/common/Table'
import { TableCell } from '@/components/common/TableCell'
import TableHeader from '@/components/common/TableHeader'

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
        <Table>
            <tr>
                <TableHeader scope='row' rowSpan={3}>
                    과세기간
                </TableHeader>
                <TableCell rowSpan={3}>
                    {taxStartPeriod || '-'} - {taxEndPeriod || '-'}
                </TableCell>
                <TableHeader scope='row' rowSpan={2}>
                    업무승용차 운행기록부
                </TableHeader>
                <TableHeader scope='row'>상호명</TableHeader>
                <TableCell>{businessName || '-'}</TableCell>
            </tr>
            <tr>
                <TableHeader scope='row'>사업자 등록번호</TableHeader>
                <TableCell>{businessRegistrationNumber || '-'}</TableCell>
            </tr>
        </Table>
    )
}

export default BusinessInfoTable
