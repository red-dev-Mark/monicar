import { style } from '@vanilla-extract/css'

import { breakPoints, vars } from '@/styles/theme.css'

export const container = style({
    width: '100%',
    height: '100vh',
    backgroundColor: vars.colors.dashboard,
    gap: '34px',
    padding: '30px',
    overflowY: 'auto',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            marginBottom: '70px',
        },
    },
})

export const breadcrumbsWrapper = style({
    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            display: 'none',
        },
    },
})

export const contents = style({
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    gap: '30px',
    marginTop: '30px',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            flexDirection: 'column',
        },
    },
})

export const contentWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
})

export const leftSection = style({
    width: '50%',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            width: '100%',
        },
    },
})

export const rightSection = style({
    width: '50%',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            width: '100%',
        },
    },
})
