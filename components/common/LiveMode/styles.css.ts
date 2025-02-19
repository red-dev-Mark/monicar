import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    color: vars.colors.white,
    border: `solid 1px ${vars.colors.gray[200]}`,
    backgroundColor: vars.colors.white,
    borderRadius: '50%',
    transition: 'transform 0.3s ease',
    ':hover': {
        transform: 'scale(1.05)',
        opacity: 1,
    },
})

export const icon = style({
    width: '24px',
    height: '24px',
})

export const clicked = style({
    backgroundColor: vars.colors.gray[200],
    color: vars.colors.white,
})
