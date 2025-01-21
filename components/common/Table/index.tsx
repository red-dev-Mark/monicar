import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

import * as styles from './styles.css'
import { TableDataType, TableSizeType } from './types'

export interface TableCellProps {
    content: React.ReactNode
    backgroundColor?: string
    colSpan?: number
}

interface TableProps {
    data: TableDataType[]
    columns: ColumnDef<TableDataType>[]
    size?: TableSizeType
}

const Table = ({ data, columns }: TableProps) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className={styles.tableRow}>
                            {row.getVisibleCells().map((cell) => {
                                const cellData = cell.getValue() as TableCellProps

                                if (!cellData || cellData.content === '') {
                                    return null
                                }

                                return (
                                    <td
                                        key={cell.id}
                                        className={`${styles.tableCell}`}
                                        style={{
                                            backgroundColor: cellData.backgroundColor,
                                        }}
                                        colSpan={cellData.colSpan}
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
