import { style } from '@vanilla-extract/css'

export const container = style({
    height: '100vh',
    padding: '20px',
    overflowY: 'auto',
})

export const contents = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginTop: '20px',
})
