export interface TableProps {
    children: React.ReactNode
    className?: string
}

export interface TableHeaderProps {
    children: React.ReactNode
    scope?: 'row' | 'col'
    rowSpan?: number
    colSpan?: number
    className?: string
}

export interface TableCellProps {
    children: React.ReactNode
    colSpan?: number
    rowSpan?: number
    className?: string
}
