import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'
import { mediaQuery } from '@/styles/utils.css'

export const sideFooter = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    '@media': {
        [mediaQuery.mobile]: {
            display: 'none',
        },
    },
})

export const logoutButton = style({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '12px',
    borderRadius: '4px',
    color: vars.colors.black,
    ':hover': {
        backgroundColor: vars.colors.gray[50],
    },
    selectors: {
        '.dark &': {
            color: vars.colors.darkText,
        },
        '.dark &:hover': {
            backgroundColor: vars.colors.darkGray,
        },
    },
    '@media': {
        [mediaQuery.mobile]: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            textAlign: 'center',
            padding: '4px 0',
            fontSize: vars.fontSizes.xsmall,
            width: '100%',
        },
    },
})

export const themeControl = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px',
})

export const themeInfo = style({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
})

export const icon = style({
    width: '20px',
    height: '20px',
})
