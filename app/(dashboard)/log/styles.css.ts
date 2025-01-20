import { style } from '@vanilla-extract/css'

export const container = style({
    height: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
})

export const contents = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    overflowY: 'auto',
    height: '100%',
    marginTop: '40px',
})
