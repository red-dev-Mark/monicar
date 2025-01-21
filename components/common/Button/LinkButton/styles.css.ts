import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    backgroundColor: vars.colors.dark,
    color: vars.colors.white,
})
