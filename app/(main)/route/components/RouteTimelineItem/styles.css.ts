import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const tableItem = style({
    width: '100%',
    padding: '14px 0px',
    display: 'flex',
    color: vars.colors.black,
})

export const timestamp = style({
    width: '30%',
})

export const speed = style({
    width: '20%',
})

export const location = style({
    width: '50%',
})
