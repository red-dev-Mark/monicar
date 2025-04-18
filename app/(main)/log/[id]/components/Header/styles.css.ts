import { style } from '@vanilla-extract/css'

import { breakPoints } from '@/styles/theme.css'

export const breadcrumbsWrapper = style({
    minWidth: '220px',
    '@media': {
        [`screen and (max-width: 1166px)`]: {
            display: 'none',
        },
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            display: 'none',
        },
    },
})
