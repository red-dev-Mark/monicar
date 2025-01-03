import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const base = style({
    color: styles.colors.error,
    fontSize: styles.fontSizes.small,
    marginTop: '5px',
})

export const successMessage = style({
    color: styles.colors.blue,
    fontSize: styles.fontSizes.small,
    marginTop: '5px',
})
