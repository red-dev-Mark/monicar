import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const base = style({
    width: '100%',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: styles.fontWeights.bold,
    padding: '16px 24px',
    borderRadius: '8px',
    ':disabled': {
        cursor: 'not-allowed',
        opacity: 0.5,
        color: styles.colors.black,
    },
})
