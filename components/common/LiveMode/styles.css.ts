import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '48px',
    height: '48px',
    color: vars.colors.white,
    border: `solid 1px ${vars.colors.gray[200]}`,
    backgroundColor: vars.colors.white,
    borderRadius: '50%',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.3)',
    transition: 'transform 0.3s ease',
    ':hover': {
        transform: 'scale(1.05)',
        opacity: 1,
    },
})

export const clicked = style({
    backgroundColor: vars.colors.gray[200],
    color: vars.colors.white,
})
