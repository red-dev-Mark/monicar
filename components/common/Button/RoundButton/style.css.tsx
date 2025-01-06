import { recipe } from '@vanilla-extract/recipes'

import { styles } from '@/styles/theme.css'

export const button = recipe({
    base: {
        borderRadius: '50%',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    variants: {
        size: {
            small: {
                backgroundColor: styles.colors.white,
                width: '76px',
                height: '48px',
                fontSize: styles.fontSizes.medium,
                border: `1px solid ${styles.colors.gray[200]}`,
                boxShadow: `0px 4px 4px 0px ${styles.colors.shadow[100]}`,
                borderRadius: '30px',
            },
            large: {
                backgroundColor: styles.colors.white,
                border: `1px solid ${styles.colors.gray[200]}`,
                color: styles.colors.primary,
                width: '342px',
                height: '60px',
                fontSize: styles.fontSizes.medium,
                borderRadius: '30px',
            },
        },
        color: {
            black: {
                backgroundColor: styles.colors.transparent[500],
                color: styles.colors.black,
                border: `1px solid ${styles.colors.gray[50]}`,
                ':hover': {
                    backgroundColor: styles.colors.gray[50],
                },
            },
            pink: {
                backgroundColor: styles.colors.transparent[500],
                color: styles.colors.primary,
                border: `1px solid ${styles.colors.gray[50]}`,
                ':hover': {
                    backgroundColor: styles.colors.gray[50],
                },
            },
        },
    },
    defaultVariants: {
        size: 'large',
        color: 'pink',
    },
})
