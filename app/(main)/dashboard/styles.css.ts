import { style } from '@vanilla-extract/css'

import { breakPoints, vars } from '@/styles/theme.css'

export const container = style({
    height: '130vh',
    backgroundColor: vars.colors.dashboard,
    display: 'flex',
    gap: '34px',
    padding: '24px',

    '@media': {
        [`screen and (max-width: ${breakPoints.tablet}px)`]: {
            flexDirection: 'column',
        },
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            backgroundColor: vars.colors.white,
            flexDirection: 'column',
            height: 'auto',
            padding: '16px ',
            gap: '0px',
        },
    },
})

export const logoWrapper = style({
    display: 'none',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            display: 'flex',
            marginTop: '60px',
            marginBottom: '20px',
            justifyContent: 'center',
        },
    },
})

export const leftSection = style({
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',

    '@media': {
        [`screen and (max-width: ${breakPoints.tablet}px)`]: {
            width: '100%',
        },
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            width: '100%',
            gap: '20px',
        },
    },
})

export const rightSection = style({
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',

    '@media': {
        [`screen and (max-width: ${breakPoints.tablet}px)`]: {
            width: '100%',
        },
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            width: '100%',
            height: '40vh',
        },
    },
})

export const vehicleStatusPanelWrapper = style({
    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            order: 3,
        },
    },
})
export const calendarWrapper = style({
    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            display: 'none',
        },
    },
})

export const noticeWrapper = style({
    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            width: '100%',
            padding: '0px',
            overflowY: 'auto',
        },
    },
})

export const header = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const introduce = style({
    color: vars.colors.black,
    fontWeight: vars.fontWeights.extraBold,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '24px',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            display: 'none',
        },
    },
})

export const userName = style({
    fontSize: vars.fontSizes.xlarge,
    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            display: 'none',
        },
    },
})

export const searchInputWrapper = style({
    position: 'absolute',
    right: 14,
    top: 18,
    width: '358px',
    zIndex: vars.zIndex.four,

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            display: 'none',
        },
    },
})

export const mapWrapper = style({
    position: 'relative',
    height: '100%',
    borderRadius: '14px',
    overflow: 'hidden',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            display: 'none',
        },
    },
})
