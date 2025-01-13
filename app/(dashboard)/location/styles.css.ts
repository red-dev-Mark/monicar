import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const container = style({
    position: 'relative',
    width: '100%',
    height: '100vh',
})

export const searchInputWrapper = style({
    width: '390px',
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    zIndex: 10,
})

export const vehicleCard = style({
    padding: '8px 16px',
    position: 'absolute',
    bottom: '48px',
    left: '50%',
    transform: 'translateX(-50%)',

    display: 'flex',
    gap: '8px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    color: styles.colors.white,
    fontWeight: styles.fontWeights.bold,
    backgroundColor: styles.colors.black,
    borderRadius: '8px',
    cursor: 'pointer',

    selectors: {
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: `8px solid ${styles.colors.black}`,
        },
    },
})

export const vehicleInfo = style({
    color: styles.colors.white,
    fontSize: styles.fontSizes.large,
    fontWeight: styles.fontWeights.bold,
})

export const description = style({
    color: styles.colors.white,
    fontSize: styles.fontSizes.xsmall,
})
