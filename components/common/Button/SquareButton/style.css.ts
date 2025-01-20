import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@/styles/theme.css'

export const button = recipe({
    base: {
        padding: '16px 24px',
    },
    variants: {
        color: {
            primary: {
                backgroundColor: vars.colors.primary,
                color: vars.colors.white,
                ':hover': {
                    opacity: vars.opacity[80],
                },
            },
            white: {
                backgroundColor: vars.colors.white,
                color: vars.colors.black,
                border: `1px solid ${vars.colors.black}`,
                ':hover': {
                    backgroundColor: vars.colors.gray[50],
                },
            },
            error: {
                backgroundColor: vars.colors.error,
                color: vars.colors.white,
                ':hover': {
                    opacity: vars.opacity[80],
                },
            },
            dark: {
                backgroundColor: vars.colors.dark,
                color: vars.colors.white,
                ':hover': {
                    backgroundColor: vars.colors.gray[800],
                },
            },
        },
    },
    defaultVariants: {
        color: 'primary',
    },
})
