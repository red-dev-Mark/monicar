import * as styles from '@/styles/table.css'
import { TableProps } from '@/types/table'

const Table = ({ children, className }: TableProps) => (
    <div className={`${styles.tableWrapper} ${className || ''}`}>
        <table className={className}>
            <tbody>{children}</tbody>
        </table>
    </div>
)

export default Table
