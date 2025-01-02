import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const container = style({
    outline: '1px solid red',

    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    width: '100%',
    height: '44px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const title = style({
    color: styles.colors.black,
    fontSize: styles.fontSizes.large,
    fontWeight: 'bold',
})
export const spacer = style({
    height: '44px',
})
