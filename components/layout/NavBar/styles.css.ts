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
    zIndex: vars.zIndex.dropdown,
    selectors: {
        '.dark &': {
            backgroundColor: vars.colors.dark,
        },
    },
    '@media': {
        [mediaQuery.mobile]: {
            position: 'fixed',
            bottom: 0,
            height: 'auto',
            width: '100%',
            padding: '4px 0',
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
            width: '100vw',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '8px',
        },
    },
})

export const icon = style({
    width: '20px',
    height: '20px',
})
