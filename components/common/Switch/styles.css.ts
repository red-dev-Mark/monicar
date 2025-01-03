import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const themeToggle = style({
    width: '48px',
    height: '24px',
    backgroundColor: styles.colors.primary,
    borderRadius: '999rem',
    position: 'relative',
})

export const themeIndicator = style({
    width: '16px',
    height: '16px',
    backgroundColor: styles.colors.white,
    borderRadius: '50%',
    position: 'absolute',
    right: '4px',
    top: '4px',
})
