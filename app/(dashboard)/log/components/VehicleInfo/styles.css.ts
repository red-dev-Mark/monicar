import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const vehicleNumber = style({
    fontSize: styles.fontSizes.large,
    color: styles.colors.black,
    fontWeight: styles.fontWeights.extraBold,
})

export const vehicleModel = style({
    color: styles.colors.gray[800],
    fontWeight: styles.fontWeights.bold,
})
