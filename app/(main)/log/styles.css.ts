import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    height: '100vh',
    padding: '40px 44px',
    overflowY: 'auto',
})

export const contents = style({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
})

export const item = style({
    ':hover': {
        backgroundColor: vars.colors.gray[50],
    },
})
