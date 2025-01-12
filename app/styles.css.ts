import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const container = style({
    width: '100%',
    height: '100%',
    backgroundColor: styles.colors.dashboard,
})
