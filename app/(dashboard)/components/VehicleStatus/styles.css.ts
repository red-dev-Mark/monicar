import { style, styleVariants } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    width: '100%',
    height: 'auto',
    display: 'flex',
    backgroundColor: vars.colors.white,
    borderRadius: '12px',
    flexDirection: 'column',
    padding: '20px',
    gap: '16px',
    color: vars.colors.gray[800],
    fontWeight: vars.fontWeights.bold,
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
    total: vars.colors.pink[400],
    active: vars.colors.pink[600],
    inactive: vars.colors.green[500],
    disabled: vars.colors.blue,
} as const

export const dots = styleVariants(statusColors, (color) => [dotBase, { backgroundColor: color }])

export const statusBars = styleVariants(statusColors, (color) => [statusBarBase, { backgroundColor: color }])
