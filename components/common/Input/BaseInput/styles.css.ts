import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const inputWrapper = style({
    width: '100%',
    position: 'relative',
})

export const baseInput = style({
    width: '100%',
    height: '48px',
    padding: '16px',

    color: vars.colors.gray[800],
    backgroundColor: vars.colors.white,
    border: `1px solid ${vars.colors.gray[200]}`,
    boxShadow: `0px 4px 4px 0px ${vars.colors.shadow[100]}`,
    borderRadius: '30px',

    ':focus': {
        outline: 'none',
    },
    ':disabled': {
        backgroundColor: vars.colors.gray[200],
    },
})

export const errorInput = style({
    border: `1px solid ${vars.colors.error}`,
})
