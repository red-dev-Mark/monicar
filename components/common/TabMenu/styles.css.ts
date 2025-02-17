import { style } from '@vanilla-extract/css'

import { breakPoints } from '@/styles/theme.css'

export const tabsWrapper = style({
    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            margin: '0px auto',
            width: 'fit-content',
        },
    },
})

export const tab = style({
    fontSize: '16px',
    fontWeight: 600,

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            fontSize: '14px',
            padding: '8px 10px',
        },
    },
})
