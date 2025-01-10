import { style } from '@vanilla-extract/css'

export const container = style({
    position: 'relative',
    width: '100%',
    height: '80px',
})

export const buttonWrapper = style({
    position: 'absolute',
    top: '2rem',
    right: 'calc(2rem + 390px + 1rem)',
})

export const searchInputWrapper = style({
    width: '390px',
    position: 'absolute',
    top: '2rem',
    right: '2rem',
})
