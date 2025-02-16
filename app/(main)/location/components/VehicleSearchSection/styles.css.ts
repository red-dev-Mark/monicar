import { style } from '@vanilla-extract/css'

import { breakPoints, vars } from '@/styles/theme.css'

export const searchInputWrapper = style({
    width: '390px',
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: vars.zIndex.dropdown,

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            width: '100%',
            padding: '12px',
            top: '0',
            left: '0',
        },
    },
})
