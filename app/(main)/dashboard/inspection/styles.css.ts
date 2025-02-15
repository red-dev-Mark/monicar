import { style } from '@vanilla-extract/css'

import { breakPoints } from '@/styles/theme.css'

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    padding: '40px 44px',
    gap: '24px',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            paddingBottom: '180px',
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

export const logoWrapper = style({
    display: 'none',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            display: 'flex',
            marginTop: '10px',
            marginBottom: '30px',
            justifyContent: 'center',
        },
    },
})

export const cardWrapper = style({
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

export const paginationWrapper = style({
    marginTop: 'auto',
    paddingBottom: '40px',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            paddingBottom: '100px',
        },
    },
})
