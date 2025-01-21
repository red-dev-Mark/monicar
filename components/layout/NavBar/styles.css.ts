import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'
import { mediaQuery } from '@/styles/utils.css'

export const navbar = style({
    width: '256px',
    height: '100vh',
    padding: '44px 18px 36px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: vars.colors.white,
    borderRight: `1px solid ${vars.colors.gray[200]}`,

    '@media': {
        [mediaQuery.mobile]: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: 'auto',
            width: '100%',
            zIndex: 50,
            padding: '12px 12px',
            alignItems: 'center',
        },
    },
})

export const navContainer = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '36px',
})

export const logoWrapper = style({
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    '@media': {
        [mediaQuery.mobile]: {
            display: 'none',
        },
    },
})

export const logoInfo = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
})

export const userEmail = style({
    fontSize: vars.fontSizes.small,
    color: vars.colors.description,
})

export const navList = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    '@media': {
        [mediaQuery.mobile]: {
            flexDirection: 'row',
        },
    },
})

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

export const themeControl = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px',
})

export const themeInfo = style({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
})
