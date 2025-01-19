import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const container = style({
    backgroundColor: styles.colors.dark,
    color: styles.colors.white,
})
