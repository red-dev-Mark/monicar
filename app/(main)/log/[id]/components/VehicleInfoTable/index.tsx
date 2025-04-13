import Table from '@/components/common/Table'
import TableCell from '@/components/common/TableCell'
import TableHeader from '@/components/common/TableHeader'
interface VehicleInfoTableProps {
    vehicleNumber: string
    vehicleModel?: string
    isLoading?: boolean
}

const VehicleInfoTable = ({ vehicleNumber, vehicleModel, isLoading = false }: VehicleInfoTableProps) => {
    return (
        <Table>
            <tr>
                <TableHeader scope='row'>자동차 등록번호</TableHeader>
                <TableHeader scope='row'>차량종류</TableHeader>
            </tr>
            <tr>
                <TableCell>{vehicleNumber || (isLoading ? '' : '-')}</TableCell>
                <TableCell>{vehicleModel || (isLoading ? '' : '-')}</TableCell>
            </tr>
        </Table>
    )
}

export default VehicleInfoTable
