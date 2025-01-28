import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const control = style({
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    zIndex: vars.zIndex.four,
    margin: '20px',
})

export const button = style({
    display: 'flex',
    width: '100px',
    justifyContent: 'center',
    gap: '12px',
})

export const contents = style({
    backgroundColor: vars.colors.white,
    borderRadius: '12px',
    padding: '40px',
    textAlign: 'center',
})

export const title = style({
    fontSize: vars.fontSizes.large,
    fontWeight: vars.fontWeights.extraBold,
    color: vars.colors.black,
})
