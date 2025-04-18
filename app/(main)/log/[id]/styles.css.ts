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
    selectors: {
        '.dark &': {
            backgroundColor: vars.colors.dark,
        },
    },
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
    position: 'sticky',
    zIndex: vars.zIndex.default,
    bottom: '30px',
    width: '100%',
    marginTop: 'auto',
    ':hover': {
        backgroundColor: vars.colors.gray[800],
    },
    selectors: {
        '.dark &': {
            color: vars.colors.darkText,
            backgroundColor: vars.colors.darkBlue,
            border: `1px solid ${vars.colors.darkGray}`,
        },
    },
    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            textAlign: 'center',
            justifyContent: 'center',
            bottom: '80px',
        },
    },
})
