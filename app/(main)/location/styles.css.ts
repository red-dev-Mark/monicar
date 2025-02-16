import { style } from '@vanilla-extract/css'

import { breakPoints, vars } from '@/styles/theme.css'

export const container = style({
    position: 'relative',
    width: '100%',
    height: '100vh',
})

export const searchInputWrapper = style({
    width: '390px',
    position: 'absolute',
    top: '32px',
    right: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: vars.zIndex.dropdown,

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            width: '100%',
            padding: '12px',
            top: 0,
            left: 0,
        },
    },
})
