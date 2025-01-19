import { style } from '@vanilla-extract/css'
import { styleVariants } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const baseButton = style({
    borderRadius: '30px',
    fontSize: vars.fontSizes.medium,
    ':hover': {
        opacity: vars.opacity[80],
    },
})

export const colorVariants = styleVariants({
    primary: {
        backgroundColor: vars.colors.primary,
        color: vars.colors.white,
    },
    secondary: {
        backgroundColor: vars.colors.transparent[500],
        color: vars.colors.gray[700],
    },
})

export const sizeVariants = styleVariants({
    small: {
        width: '76px',
        height: '48px',
        border: `1px solid ${vars.colors.gray[200]}`,
        boxShadow: `0px 4px 4px 0px ${vars.colors.shadow[100]}`,
    },
    large: {
        height: '60px',
        padding: '16px 24px',
    },
})

export const button = {
    base: baseButton,
    color: colorVariants,
    size: sizeVariants,
}
