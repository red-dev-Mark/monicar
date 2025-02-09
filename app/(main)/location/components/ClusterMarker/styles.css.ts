import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const outer = style({
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const inner = style({
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: vars.colors.black,
    fontSize: vars.fontSizes.small,
    fontWeight: vars.fontWeights.bold,
    userSelect: 'none',
})
