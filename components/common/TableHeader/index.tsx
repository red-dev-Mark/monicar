import * as styles from '@/styles/table.css'
import { TableHeaderProps } from '@/types/table'

const TableHeader = ({ children, scope = 'col', rowSpan, colSpan, className }: TableHeaderProps) => {
    return (
        <th scope={scope} rowSpan={rowSpan} colSpan={colSpan} className={`${styles.tableHeader} ${className || ''}`}>
            {children}
        </th>
    )
}

export default TableHeader
