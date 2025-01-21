import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const base = style({
    width: '100%',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: vars.fontWeights.bold,
    border: `1px solid ${vars.colors.gray[200]}`,
    borderRadius: '8px',
    ':disabled': {
        cursor: 'not-allowed',
        opacity: vars.opacity[50],
    },
})
