import { style } from '@vanilla-extract/css'

import { breakPoints, vars } from '@/styles/theme.css'

export const container = style({
    padding: '16px',
    position: 'absolute',
    top: '6.5rem',
    right: '2rem',
    zIndex: vars.zIndex.header,
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
    justifyContent: 'center',
    alignItems: 'center',
    color: vars.colors.gray[800],
    backgroundColor: vars.colors.transparent[800],
    borderRadius: '14px',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            width: 'calc(100% - 24px)',
            padding: '4px',
            top: '72px',
            left: '12px',
            flexDirection: 'row',
            gap: 0,
            justifyContent: 'space-between',
        },
    },
})
