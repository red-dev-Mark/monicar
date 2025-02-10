import { style } from '@vanilla-extract/css'

import { breakPoints, vars } from '@/styles/theme.css'

export const container = style({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '40px 44px',
    gap: '30px',
    backgroundColor: vars.colors.white,
    borderRadius: '30px 30px 0 0',
    position: 'relative',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            width: '100%',
            padding: '40px 20px',
        },
    },
})

export const header = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

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

export const tableWrapper = style({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
})

export const tableHeader = style({
    padding: '8px',
    fontWeight: vars.fontWeights.bold,
    backgroundColor: vars.colors.gray[50],
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
    borderRight: `1px solid ${vars.colors.gray[200]}`,
    textAlign: 'center',
    color: vars.colors.black,
})

export const tableCell = style({
    textAlign: 'center',
    padding: '8px',
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
    borderRight: `1px solid ${vars.colors.gray[200]}`,
    color: vars.colors.black,
})

export const datePickerInputWrapper = style({
    width: '100%',
    minWidth: '390px',
    height: '48px',
    color: vars.colors.black,

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            width: '100%',
            minWidth: '360px',
        },
    },
})

export const excelButtonWrapper = style({
    display: 'flex',
    width: '90px',
    justifyContent: 'center',
    gap: '6px',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            display: 'none',
        },
    },
})

export const deleteButtonWrapper = style({
    width: '110px',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            display: 'none',
        },
    },
})

export const deleteButton = style({
    display: 'flex',
    gap: '6px',
})

export const linkButton = style({
    color: vars.colors.white,
    backgroundColor: vars.colors.dark,
    fontWeight: vars.fontWeights.bold,
    padding: '16px 24px',
    textAlign: 'center',
    borderRadius: '8px',
    marginTop: 'auto',
    position: 'sticky',
    zIndex: vars.zIndex.default,
    bottom: '80px',
    width: '100%',
    ':hover': {
        backgroundColor: vars.colors.gray[800],
    },

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            textAlign: 'center',
            justifyContent: 'center',
        },
    },
})
