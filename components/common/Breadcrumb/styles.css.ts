import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const container = style({
    marginBottom: '16px',
})

export const list = style({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: styles.colors.gray[600],
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
        color: styles.colors.gray[800],
    },
})
