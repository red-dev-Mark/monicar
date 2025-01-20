import { style, styleVariants } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

const baseButton = style({
    borderRadius: '30px',
    fontSize: styles.fontSizes.medium,
    ':hover': {
        opacity: styles.opacity[80],
    },
})

export const colorVariants = styleVariants({
    primary: {
        backgroundColor: styles.colors.primary,
        color: styles.colors.white,
    },
    secondary: {
        backgroundColor: styles.colors.transparent[500],
        color: styles.colors.gray[700],
    },
})

export const sizeVariants = styleVariants({
    small: {
        minWidth: '70px',
        height: '48px',
        padding: '0 6px',
        border: `1px solid ${styles.colors.gray[200]}`,
        boxShadow: `0px 4px 4px 0px ${styles.colors.shadow[100]}`,
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
