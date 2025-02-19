import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    width: '30px',
    height: '30px',
    color: vars.colors.white,
    border: `solid 1px ${vars.colors.gray[200]}`,
})
