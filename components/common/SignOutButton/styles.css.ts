import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const logoutButton = style({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '12px',
    borderRadius: '4px',
    color: vars.colors.gray[800],
    border: `1px solid ${vars.colors.gray[200]}`,
    justifyContent: 'center',
    width: '100%',
    ':hover': {
        backgroundColor: vars.colors.gray[50],
    },
})

export const icon = style({
    width: '24px',
    height: '24px',
})
