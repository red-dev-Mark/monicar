import { style } from '@vanilla-extract/css'

import { FONT_WEIGHT } from '@/styles/font.css'
import { styles } from '@/styles/theme.css'

export const base = style({
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: FONT_WEIGHT.bold,
    ':disabled': {
        cursor: 'not-allowed',
        opacity: 0.5,
        color: styles.colors.black,
    },
})

export const buttonSize = {
    small: style({
        width: '94px',
        height: '48px',
        padding: '16px 24px',
        fontSize: styles.fontSizes.small,
        borderRadius: '8px',
    }),
    medium: style({
        width: '170px',
        height: '60px',
        padding: '16px 24px',
        fontSize: styles.fontSizes.medium,
        borderRadius: '8px',
    }),
    large: style({
        width: '290px',
        height: '60px',
        padding: '16px 24px',
        fontSize: styles.fontSizes.medium,
        borderRadius: '8px',
    }),
    xlarge: style({
        width: '358px',
        height: '60px',
        padding: '16px 24px',
        fontSize: styles.fontSizes.medium,
        borderRadius: '8px',
    }),
    xxlarge: style({
        width: '380px',
        height: '60px',
        padding: '16px 24px',
        fontSize: styles.fontSizes.medium,
        borderRadius: '8px',
    }),
}

export const buttonColor = {
    dark: style({
        backgroundColor: styles.colors.dark,
        color: styles.colors.white,
        ':hover': {
            backgroundColor: styles.colors.gray[800],
        },
    }),
    primary: style({
        backgroundColor: styles.colors.primary,
        color: styles.colors.white,
        ':hover': {
            backgroundColor: styles.colors.secondaryPrimary,
        },
    }),
    gray: style({
        backgroundColor: styles.colors.white,
        border: `1px solid ${styles.colors.gray[200]}`,
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.04)',
        color: styles.colors.black,
        ':hover': {
            backgroundColor: styles.colors.gray[100],
        },
    }),
    white: style({
        backgroundColor: styles.colors.white,
        color: styles.colors.black,
        border: `1px solid ${styles.colors.black}`,
        ':hover': {
            backgroundColor: styles.colors.gray[50],
        },
    }),
    transparent: style({
        backgroundColor: `${styles.colors.white}80`,
        color: styles.colors.black,
        border: `1px solid ${styles.colors.gray[50]}`,
        ':hover': {
            backgroundColor: styles.colors.gray[50],
        },
    }),
}
