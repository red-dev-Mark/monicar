import { style } from '@vanilla-extract/css'

import { breakPoints, vars } from '@/styles/theme.css'

export const container = style({
    width: '124px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    justifyContent: 'center',
    alignItems: 'center',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            gap: '2px',
        },
    },
})

export const titleWrapper = style({
    marginLeft: '-8px',
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    alignItems: 'center',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            gap: '8px',
        },
    },
})

export const circle = style({
    width: '16px',
    height: '16px',
    borderRadius: '50%',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            width: '8px',
            height: '8px',
        },
    },
})

export const title = style({
    fontWeight: vars.fontWeights.bold,

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            fontSize: vars.fontSizes.xsmall,
        },
    },
})

export const count = style({
    fontSize: vars.fontSizes.xxlarge,
    fontWeight: vars.fontWeights.bold,

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            fontSize: vars.fontSizes.mediumPlus,
        },
    },
})

export const progressWrapper = style({
    width: '100%',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            display: 'none',
        },
    },
})
