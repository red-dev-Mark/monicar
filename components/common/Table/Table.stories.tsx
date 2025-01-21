import { ColumnDef } from '@tanstack/react-table'

import { vars } from '@/styles/theme.css'

import Badge from '../Badge'

import { TableDataType } from './types'

import TanStackTable, { TableCellProps } from './index'
import Table from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TanStackTable> = {
    title: 'Components/Table',
    component: Table,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large', 'full'],
            defaultValue: 'medium',
        },
    },
}

export default meta
type StoryType = StoryObj<typeof Table>

const fourColumns: ColumnDef<TableDataType>[] = [
    {
        id: 'col1',
        accessorKey: 'col1',
        cell: ({ getValue }) => {
            const value = getValue() as TableCellProps
            return value.content
        },
    },
    {
        id: 'col2',
        accessorKey: 'col2',
        cell: ({ getValue }) => {
            const value = getValue() as TableCellProps
            return value.content
        },
    },
    {
        id: 'col3',
        accessorKey: 'col3',
        cell: ({ getValue }) => {
            const value = getValue() as TableCellProps
            return value.content
        },
    },
    {
        id: 'col4',
        accessorKey: 'col4',
        cell: ({ getValue }) => {
            const value = getValue() as TableCellProps
            return value.content
        },
    },
]

const twoColumns: ColumnDef<TableDataType>[] = [
    {
        id: 'col1',
        accessorKey: 'col1',
        cell: ({ getValue }) => {
            const value = getValue() as TableCellProps
            return value.content
        },
    },
    {
        id: 'col2',
        accessorKey: 'col2',
        cell: ({ getValue }) => {
            const value = getValue() as TableCellProps
            return value.content
        },
    },
]

const threeColumns: ColumnDef<TableDataType>[] = [
    {
        id: 'col1',
        accessorKey: 'col1',
        cell: ({ getValue }) => {
            const value = getValue() as TableCellProps
            return value.content
        },
    },
    {
        id: 'col2',
        accessorKey: 'col2',
        cell: ({ getValue }) => {
            const value = getValue() as TableCellProps
            return value.content
        },
    },
    {
        id: 'col3',
        accessorKey: 'col3',
        cell: ({ getValue }) => {
            const value = getValue() as TableCellProps
            return value.content
        },
    },
]

const nineColumns: ColumnDef<TableDataType>[] = Array.from({ length: 9 }, (_unused, index) => ({
    id: `col${index + 1}`,
    accessorKey: `col${index + 1}`,
    cell: ({ getValue }) => {
        const value = getValue() as TableCellProps
        return value.content
    },
}))

export const TwoColumns: StoryType = {
    args: {
        columns: twoColumns,
        data: [
            {
                col1: { content: '날짜', backgroundColor: `${vars.colors.gray[100]}` },
                col2: { content: '매출', backgroundColor: `${vars.colors.gray[100]}` },
            },
            {
                col1: { content: '2024-01-01' },
                col2: { content: '1,234,567원' },
            },
            {
                col1: { content: '2024-01-02' },
                col2: { content: '2,345,678원' },
            },
            {
                col1: { content: '2024-01-03' },
                col2: { content: '3,456,789원' },
            },
            {
                col1: { content: '2024-01-04' },
                col2: { content: '4,567,890원' },
            },
            {
                col1: { content: '2024-01-05' },
                col2: { content: '5,678,901원' },
            },
        ],
    },
}

export const ThreeColumns: StoryType = {
    args: {
        columns: threeColumns,
        data: [
            {
                col1: { content: '프로젝트', backgroundColor: `${vars.colors.gray[100]}` },
                col2: { content: '상태', backgroundColor: `${vars.colors.gray[100]}` },
                col3: { content: '완료일', backgroundColor: `${vars.colors.gray[100]}` },
            },
            {
                col1: { content: 'A 프로젝트' },
                col2: { content: <Badge shape={'circle'} variant={'운행중'} /> },
                col3: { content: '2024-03-01' },
            },
            {
                col1: { content: 'B 프로젝트' },
                col2: { content: <Badge shape={'circle'} variant={'운행중'} /> },
                col3: { content: '2024-04-01' },
            },
            {
                col1: { content: 'C 프로젝트' },
                col2: { content: <Badge shape={'circle'} variant={'운행중'} /> },
                col3: { content: '2024-05-01' },
            },
        ],
    },
}

export const FourColumns: StoryType = {
    args: {
        columns: fourColumns,
        data: [
            {
                col1: { content: '이름', backgroundColor: `${vars.colors.gray[100]}` },
                col2: { content: '부서', backgroundColor: `${vars.colors.gray[100]}` },
                col3: { content: '직급', backgroundColor: `${vars.colors.gray[100]}` },
                col4: { content: '상태', backgroundColor: `${vars.colors.gray[100]}` },
            },
            {
                col1: { content: '김철수' },
                col2: { content: '개발팀' },
                col3: { content: '팀장' },
                col4: { content: <Badge shape={'circle'} variant={'운행중'} /> },
            },
        ],
    },
}

export const NineColumn: StoryType = {
    args: {
        columns: nineColumns,
        data: Array.from({ length: 9 }, (_unused, rowIndex) => {
            const row: Record<string, TableCellProps> = {}
            for (let columnIndex = 1; columnIndex <= 9; columnIndex++) {
                row[`col${columnIndex}`] = {
                    content: rowIndex === 0 ? `헤더 ${columnIndex}` : `데이터 ${rowIndex}-${columnIndex}`,
                    backgroundColor: rowIndex === 0 ? `${vars.colors.gray[100]}` : undefined,
                }
            }
            return row
        }),
    },
}
