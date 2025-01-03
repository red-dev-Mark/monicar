import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'
import { mediaQuery } from '@/styles/utils.css'

export const sideNav = style({
    width: '256px',
    height: '100vh',
    padding: '44px 18px 36px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: styles.colors.white,
    borderRight: `1px solid ${styles.colors.gray[200]}`,

    '@media': {
        [mediaQuery.mobile]: {
            display: 'none',
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
})

export const logoInfo = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
})

export const userEmail = style({
    fontSize: styles.fontSizes.small,
    color: styles.colors.description,
})

export const navList = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
})

export const sideFooter = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
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
