import { style } from '@vanilla-extract/css'

import { breakPoints, vars } from '@/styles/theme.css'

export const container = style({
    width: '390px',
    maxHeight: '436px',
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: vars.zIndex.dropdown,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '12px 12px 0 0',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    overflow: 'hidden',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            width: '100%',
            maxHeight: '340px',
            bottom: '68px',
        },
    },
})

export const listHeader = style({
    margin: '8px 0',
    marginRight: '12px',
    display: 'flex',
    justifyContent: 'flex-end',
    color: vars.colors.gray[700],
    fontSize: vars.fontSizes.small,
})

export const vehicleCount = style({
    margin: '0 2px',
    fontWeight: vars.fontWeights.bold,
})

export const vehicleList = style({
    height: '340px',
    overflowY: 'auto',
    display: 'flex',
    gap: '4px',
    flexDirection: 'column',

    '::-webkit-scrollbar': {
        width: '4px',
    },

    '::-webkit-scrollbar-track': {
        background: 'transparent',
    },

    '::-webkit-scrollbar-thumb': {
        background: vars.colors.gray[500],
        borderRadius: '2px',
    },

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            maxHeight: '220px',
        },
    },
})

export const listItem = style({
    padding: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '12px',

    userSelect: 'none',
    cursor: 'pointer',

    selectors: {
        '&:hover': {
            backgroundColor: vars.colors.gray[100],
        },
    },
})

export const vehicleNumber = style({
    marginLeft: '-32px',
    fontSize: vars.fontSizes.large,

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            fontSize: vars.fontSizes.mediumPlus,
        },
    },
})

export const emptyText = style({
    height: '436px',
    paddingBottom: '64px',
    display: 'flex',
    gap: '4px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: vars.colors.gray[800],
    fontSize: vars.fontSizes.medium,
    fontWeight: vars.fontWeights.bold,

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            paddingBottom: '144px',
        },
    },
})

export const description = style({
    color: vars.colors.gray[600],
})

export const badge = style({
    fontSize: vars.fontSizes.small,

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            fontSize: vars.fontSizes.xsmall,
        },
    },
})
