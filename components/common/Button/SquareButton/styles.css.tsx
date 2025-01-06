import { recipe } from '@vanilla-extract/recipes'

import { styles } from '@/styles/theme.css'

export const button = recipe({
    variants: {
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
                boxShadow: `0px 4px 4px 0px ${styles.colors.shadow[400]}`,
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
                backgroundColor: styles.colors.transparent,
                color: styles.colors.black,
                border: `1px solid ${styles.colors.gray[50]}`,
                ':hover': {
                    backgroundColor: styles.colors.gray[50],
                },
            },
        },
    },
    defaultVariants: {
        color: 'primary',
    },
})
