import { flexRender, getCoreRowModel, useReactTable, ColumnDef } from '@tanstack/react-table'

import * as styles from './styles.css'

export interface TableCellProps {
    content: React.ReactNode
    backgroundColor?: string
    colSpan?: number
}

export type TableDataType = Record<string, TableCellProps>

interface TableProps {
    data: TableDataType[]
    columns: ColumnDef<TableDataType>[]
}

const Table = ({ data, columns }: TableProps) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className={styles.tableRow}>
                            {row.getVisibleCells().map((cell) => {
                                const cellData = cell.getValue() as TableCellProps
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
