import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { styles } from '@/styles/theme.css'

export const base = style({
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: styles.fontWeights.bold,
    ':disabled': {
        cursor: 'not-allowed',
        opacity: 0.5,
        color: styles.colors.black,
    },
})

export const button = recipe({
    base: {
        padding: '16px 24px',
        borderRadius: '8px',
    },
    variants: {
        size: {
            small: {
                width: '94px',
                height: '48px',
                fontSize: styles.fontSizes.small,
            },
            medium: {
                width: '170px',
                height: '60px',
                fontSize: styles.fontSizes.medium,
            },
            large: {
                width: '290px',
                height: '60px',
                fontSize: styles.fontSizes.medium,
            },
            xlarge: {
                width: '358px',
                height: '60px',
                fontSize: styles.fontSizes.medium,
            },
            xxlarge: {
                width: '380px',
                height: '60px',
                fontSize: styles.fontSizes.medium,
            },
        },
        color: {
            dark: {
                backgroundColor: styles.colors.dark,
                color: styles.colors.white,
                ':hover': {
                    backgroundColor: styles.colors.gray[800],
                },
            },
            primary: {
                backgroundColor: styles.colors.primary,
                color: styles.colors.white,
                ':hover': {
                    backgroundColor: styles.colors.secondaryPrimary,
                },
            },
            gray: {
                backgroundColor: styles.colors.white,
                border: `1px solid ${styles.colors.gray[200]}`,
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.04)',
                color: styles.colors.black,
                ':hover': {
                    backgroundColor: styles.colors.gray[100],
                },
            },
            white: {
                backgroundColor: styles.colors.white,
                color: styles.colors.black,
                border: `1px solid ${styles.colors.black}`,
                ':hover': {
                    backgroundColor: styles.colors.gray[50],
                },
            },
            transparent: {
                backgroundColor: `${styles.colors.white}80`,
                color: styles.colors.black,
                border: `1px solid ${styles.colors.gray[50]}`,
                ':hover': {
                    backgroundColor: styles.colors.gray[50],
                },
            },
        },
    },
    defaultVariants: {
        size: 'medium',
        color: 'primary',
    },
})
