import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const base = style({
    color: styles.colors.error,
    fontSize: styles.fontSizes.small,
    marginTop: '5px',
})
