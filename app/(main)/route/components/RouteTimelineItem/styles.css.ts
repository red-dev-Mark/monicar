import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const tableItem = style({
    padding: '18px 0px',
    display: 'flex',
    color: vars.colors.black,
})

export const timestamp = style({
    width: '40%',
})

export const speed = style({
    width: '20%',
})

export const location = style({
    width: '40%',
})
