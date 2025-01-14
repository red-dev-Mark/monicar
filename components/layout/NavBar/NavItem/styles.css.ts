import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'
import { mediaQuery } from '@/styles/utils.css'

export const navItem = style({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '12px',
    borderRadius: '4px',
    color: styles.colors.black,
    ':hover': {
        backgroundColor: styles.colors.gray[50],
    },
    '@media': {
        [mediaQuery.mobile]: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            textAlign: 'center',
            padding: '4px 0',
            fontSize: styles.fontSizes.xsmall,
            width: '100%',
        },
    },
})

export const currentItem = style({
    color: styles.colors.primary,
    fontWeight: styles.fontWeights.bold,
    backgroundColor: styles.colors.gray[50],
})
