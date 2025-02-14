import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: vars.zIndex.dropdown,
})
