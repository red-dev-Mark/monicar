import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'
import { mediaQuery } from '@/styles/utils.css'

export const navItem = style({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '12px',
    borderRadius: '4px',
    color: vars.colors.black,
    ':hover': {
        backgroundColor: vars.colors.gray[50],
    },
    '@media': {
        [mediaQuery.mobile]: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            textAlign: 'center',
            padding: '4px 0',
            fontSize: vars.fontSizes.xsmall,
            width: '100%',
        },
    },
})

export const currentItem = style({
    color: vars.colors.primary,
    fontWeight: vars.fontWeights.bold,
    backgroundColor: vars.colors.gray[50],
})
