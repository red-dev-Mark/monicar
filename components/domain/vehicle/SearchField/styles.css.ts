import { style } from '@vanilla-extract/css'

export const container = style({
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end',
})

export const searchInputWrapper = style({
    width: '390px',
})

export const buttonGroup = style({
    display: 'flex',
    gap: '12px',
    width: '200px',
})

export const button = style({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
})
