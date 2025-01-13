import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const container = style({
    padding: '16px',
    position: 'absolute',
    top: '6.5rem',
    right: '2rem',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    justifyContent: 'center',
    alignItems: 'center',
    color: styles.colors.gray[800],
    backgroundColor: 'rgb(256, 256, 256, 0.8)',
    borderRadius: '14px',
})

export const itemContainer = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    justifyContent: 'center',
    alignItems: 'center',
})

export const titleWrapper = style({
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
    alignItems: 'center',
})

export const circle = style({
    width: '16px',
    height: '16px',
    backgroundColor: styles.colors.pink[600],
    borderRadius: '50%',
})

export const title = style({})

export const count = style({
    fontSize: styles.fontSizes.xxlarge,
    fontWeight: styles.fontWeights.bold,
})

export const bar = style({
    width: '112px',
    height: '14px',
    backgroundColor: styles.colors.gray[200],
    borderRadius: '20px',
})
