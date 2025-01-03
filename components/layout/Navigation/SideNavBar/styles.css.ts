import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'
import { mediaQuery } from '@/styles/utils.css'

export const sideNav = style({
    width: '256px',
    height: '100vh',
    padding: '44px 22px 36px 22px',
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

export const mainNav = style({
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

export const logoName = style({
    color: styles.colors.primary,
    fontSize: styles.fontSizes.large,
    fontWeight: styles.fontWeights.extraBold,
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

export const themeToggle = style({
    width: '48px',
    height: '24px',
    backgroundColor: styles.colors.primary,
    borderRadius: '999rem',
    position: 'relative',
})

export const themeIndicator = style({
    width: '16px',
    height: '16px',
    backgroundColor: styles.colors.white,
    borderRadius: '50%',
    position: 'absolute',
    right: '4px',
    top: '4px',
})
