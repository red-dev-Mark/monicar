import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

const messageBase = style({
    fontSize: styles.fontSizes.small,
    marginTop: '5px',
})

export const errorMessage = style([
    messageBase,
    {
        color: styles.colors.error,
    },
])

export const successMessage = style([
    messageBase,
    {
        color: styles.colors.blue,
    },
])
