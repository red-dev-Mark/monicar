import { style } from '@vanilla-extract/css'

import { breakPoints } from '@/styles/theme.css'

export const container = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    padding: '20px 0px',
    width: '100%',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            gridTemplateColumns: '1fr',
            gap: '12px',
        },
    },
})
