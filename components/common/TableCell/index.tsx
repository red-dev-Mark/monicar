import * as styles from '@/styles/table.css'
import { TableCellProps } from '@/types/ui'

const TableCell = ({ children, colSpan, rowSpan, className }: TableCellProps) => (
    <td colSpan={colSpan} rowSpan={rowSpan} className={`${styles.tableCell} ${className || ''}`}>
        {children}
    </td>
)

export default TableCell
