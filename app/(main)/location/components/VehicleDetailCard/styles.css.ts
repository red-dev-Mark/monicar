import { style } from '@vanilla-extract/css'

import { breakPoints, vars } from '@/styles/theme.css'

export const container = style({
    width: '390px',
    height: '436px',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 35,
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    backgroundColor: vars.colors.white,
    borderRadius: '12px 12px 0 0',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    selectors: {
        '.dark &': {
            color: vars.colors.darkText,
            backgroundColor: vars.colors.dark,
        },
    },
    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            width: '100%',
            height: '348px',
            marginBottom: '68px',
            padding: '12px',
        },
    },
})

export const header = style({
    paddingBottom: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {},
    },
})

export const closeButton = style({
    position: 'relative',
    opacity: 0.7,
    transition: 'opacity 0.2s ease',
    ':hover': {
        opacity: 1,
    },
})

export const vehicleNumber = style({
    marginLeft: '-14px',
    fontSize: vars.fontSizes.large,
    fontWeight: vars.fontWeights.bold,
    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            fontSize: vars.fontSizes.mediumPlus,
        },
    },
})

export const tableWrapper = style({
    margin: '12px 0',
    border: `1px solid ${vars.colors.gray[400]}`,
    borderRadius: '8px',
    overflow: 'hidden',
    selectors: {
        '.dark &': {
            border: `1px solid ${vars.colors.darkGray}`,
        },
    },
})

export const table = style({
    width: '100%',
    fontSize: vars.fontSizes.small,
    borderCollapse: 'collapse',
})

export const tableHeader = style({
    width: '35%',
    padding: '8px',
    textAlign: 'left',
    fontWeight: vars.fontWeights.bold,
    backgroundColor: vars.colors.gray[50],
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
    borderRight: `1px solid ${vars.colors.gray[200]}`,
    selectors: {
        '.dark &': {
            color: vars.colors.darkText,
            backgroundColor: vars.colors.darkBlue,
            border: `1px solid ${vars.colors.darkGray}`,
        },
    },
})

export const tableCell = style({
    padding: '8px',
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
    borderRight: `1px solid ${vars.colors.gray[200]}`,
    selectors: {
        '.dark &': {
            border: `1px solid ${vars.colors.darkGray}`,
        },
    },
})

export const engineInfo = style({
    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            display: 'none',
        },
    },
})
