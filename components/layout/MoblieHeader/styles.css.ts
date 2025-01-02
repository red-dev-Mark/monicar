import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const container = style({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    height: '44px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const title = style({
    color: styles.colors.black,
    fontSize: styles.fontSizes.large,
    fontWeight: styles.fontWeights.bold,
})

export const spacer = style({
    marginTop: '44px',
})
