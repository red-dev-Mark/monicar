import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    marginBottom: '16px',
})

export const list = style({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: vars.colors.gray[600],
})

export const item = style({
    display: 'flex',
    alignItems: 'center',
})

export const divider = style({
    margin: '0 8px',
})

export const link = style({
    ':hover': {
        color: vars.colors.gray[800],
    },
})
