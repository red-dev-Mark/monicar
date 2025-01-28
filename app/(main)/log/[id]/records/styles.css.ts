import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    width: '100%',
    height: '100vh',
    backgroundColor: vars.colors.dashboard,
    gap: '34px',
    padding: '30px',
    justifyContent: 'center',
})

export const contents = style({
    display: 'flex',
    alignItems: 'center',
})

export const button = style({
    display: 'flex',
    width: '100px',
    justifyContent: 'center',
    gap: '6px',
})

export const leftSection = style({
    padding: '20px',
})

export const rightSection = style({})
