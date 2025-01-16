import { style } from '@vanilla-extract/css'

export const container = style({
    position: 'relative',
    width: '100%',
    height: '100vh',
})

export const searchInputWrapper = style({
    width: '390px',
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    zIndex: 10,
})

export const zoomLevel = style({
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    fontSize: '24px',
    color: 'red',
})
