import { TableProps } from '@/types/table'

export const Table = ({ children, className }: TableProps) => (
    <table className={className}>
        <tbody>{children}</tbody>
    </table>
)
