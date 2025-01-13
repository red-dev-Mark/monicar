import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const container = style({
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
})

export const imageUrlWrapper = style({
    width: '100%',
    height: '250px',
    backgroundColor: styles.colors.gray[200],
})

export const childrenWrapper = style({
    width: '100%',
    borderRadius: '30px 30px 0 0',
    backgroundColor: styles.colors.white,
    marginTop: '-20px',
})
