import { style, styleVariants } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const container = style({
    width: '620px',
    display: 'flex',
    backgroundColor: styles.colors.white,
    borderRadius: '12px',
    flexDirection: 'column',
    padding: '20px',
    gap: '16px',
    color: styles.colors.gray[800],
    fontWeight: styles.fontWeights.bold,
})

export const statusRow = style({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
})

export const text = style({
    flex: 1,
})

const dotBase = style({
    width: '16px',
    height: '16px',
    borderRadius: '50%',
})

const statusBarBase = style({
    width: '400px',
    height: '14px',
    borderRadius: '20px',
})

const statusColors = {
    total: styles.colors.pink[400],
    active: styles.colors.pink[600],
    inactive: styles.colors.green[500],
    disabled: styles.colors.blue,
} as const

export const dots = styleVariants(statusColors, (color) => [dotBase, { backgroundColor: color }])

export const statusBars = styleVariants(statusColors, (color) => [statusBarBase, { backgroundColor: color }])
