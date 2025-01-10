import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const title = style({
    fontSize: styles.fontSizes.xlarge,
    fontWeight: styles.fontWeights.bold,
    textAlign: 'center',
    marginTop: '60px',
})

export const formWrapper = style({
    display: 'flex',
    justifyContent: 'center',
})

export const buttonWrapper = style({
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '30px',
    maxWidth: '400px',
    margin: '0 auto',
})
