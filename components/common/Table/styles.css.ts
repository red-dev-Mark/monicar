import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const tableWrapper = style({
    borderRadius: '6px',
    border: `1px solid ${styles.colors.gray[100]}`,
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
})
