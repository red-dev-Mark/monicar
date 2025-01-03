import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const round = style({
    borderRadius: '50%',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

export const roundSize = {
    small: style({
        width: '76px',
        height: '48px',
        fontSize: styles.fontSizes.medium,
        border: `1px solid ${styles.colors.gray[200]}`,
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.04)',
        borderRadius: '30px',
    }),
    large: style({
        backgroundColor: styles.colors.white,
        border: `1px solid ${styles.colors.gray[200]}`,
        color: styles.colors.primary,
        width: '342px',
        height: '60px',
        fontSize: styles.fontSizes.medium,
        borderRadius: '30px',
    }),
}
