import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const tableItem = style({
    padding: '18px 0px',
    display: 'flex',
    color: vars.colors.black,
})

export const pagination = style({
    margin: '12px 0 8px',
})

export const speed = style({
    width: '20%',
})

export const timestamp = style({
    width: '30%',
})

export const location = style({
    width: '50%',
})
