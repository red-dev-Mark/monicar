import { style, styleVariants } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'
import { mediaQuery } from '@/styles/utils.css'

import { TableSizeType } from './types'

export const tableContainer = style({
    borderRadius: '6px',
    border: `1px solid ${styles.colors.gray[100]}`,
    width: '100%',
    maxWidth: '1200px',
    overflowX: 'auto',
    '@media': {
        [mediaQuery.mobile]: {
            maxWidth: '100%',
        },
    },
})

export const table = style({
    width: '100%',
    borderCollapse: 'collapse',
})

export const tableRow = style({
    borderBottom: `1px solid ${styles.colors.gray[100]}`,
})

export const tableCell = style({
    padding: '16px',
    minWidth: '100px',
    maxWidth: '200px',
})

const tableSizeVariants: Record<TableSizeType, { width: string }> = {
    small: { width: '312px' },
    medium: { width: '358px' },
    large: { width: '1126px' },
    full: { width: '100%' },
}

export const tableContainerSize = styleVariants(tableSizeVariants)
