import { style } from '@vanilla-extract/css'

export const errorMessage = style({
    display: 'flex',
    alignItems: 'center',
    color: 'error',
    fontSize: '14px',
})

export const icon = style({
    marginRight: '5px',
})
