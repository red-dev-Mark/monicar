import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const navItem = style({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '12px',
    borderRadius: '4px',
    ':hover': {
        backgroundColor: styles.colors.gray[50],
    },
})
