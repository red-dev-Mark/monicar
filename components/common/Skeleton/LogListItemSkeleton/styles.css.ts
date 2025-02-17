import { style } from '@vanilla-extract/css'

import { breakPoints, vars } from '@/styles/theme.css'

export const container = style({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: '24px 0px',
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
    color: vars.colors.black,
    fontWeight: vars.fontWeights.bold,
    fontSize: vars.fontSizes.mediumPlus,
    border: 'none',
    transition: 'transform 0.3s ease',
    ':hover': {
        backgroundColor: vars.colors.gray[50],
        transform: 'scale(1.02)',
    },

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            fontSize: vars.fontSizes.medium,
            padding: '16px',
            border: `1px solid ${vars.colors.gray[200]}`,
            borderRadius: '8px',
            margin: '8px 0',
        },
    },
})

export const list = style({
    display: 'flex',
    width: '100%',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            gap: '8px',
        },
    },
})

export const itemWrapper = style({
    flex: 1,
    display: 'flex',
    justifyContent: 'center',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            textAlign: 'left',
        },
    },
})

export const icon = style({
    width: '24px',
    height: '24px',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            display: 'none',
        },
    },
})

export const badge = style({
    flex: 1,

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            flex: 'none',
        },
    },
})
