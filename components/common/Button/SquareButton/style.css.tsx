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
            white: {
                backgroundColor: styles.colors.white,
                color: styles.colors.black,
                border: `1px solid ${styles.colors.black}`,
                ':hover': {
                    backgroundColor: styles.colors.gray[50],
                },
            },
            error: {
                backgroundColor: styles.colors.error,
                color: styles.colors.white,
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
