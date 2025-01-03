import { style, styleVariants } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const base = style({
    marginTop: '12px',
    marginLeft: '8px',

    fontSize: styles.fontSizes.small,
    fontWeight: styles.fontWeights.bold,
})

export const message = styleVariants({
    error: {
        color: styles.colors.error,
    },
    success: {
        color: styles.colors.blue,
    },
})
