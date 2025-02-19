import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    backgroundColor: vars.colors.dark,
    color: vars.colors.white,
    selectors: {
        '.dark &': {
            color: vars.colors.darkText,
            backgroundColor: vars.colors.darkBlue,
            border: `1px solid ${vars.colors.darkGray}`,
        },
    },
})
