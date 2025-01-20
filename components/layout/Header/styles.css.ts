import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const header = style({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    height: '44px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const title = style({
    color: vars.colors.black,
    fontSize: vars.fontSizes.large,
    fontWeight: vars.fontWeights.bold,
})

export const spacer = style({
    marginTop: '44px',
})
