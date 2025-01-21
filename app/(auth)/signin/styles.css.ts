import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    height: '100%',
    display: 'flex',
    gap: '244px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url('/images/sign-in-background-desktop.jpg')`,
    backgroundSize: 'cover',
})

export const introSection = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

export const introduceMessage = style({
    marginBottom: '-24px',
    color: vars.colors.white,
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: vars.fontWeights.bold,
})

export const authSection = style({
    display: 'flex',
    gap: '44px',
    flexDirection: 'column',
})

export const authHeader = style({
    display: 'flex',
    gap: '12px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

export const authForm = style({
    display: 'flex',
    gap: '18px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

export const authAction = style({
    width: '100%',
    marginTop: '12px',
})

export const helpText = style({
    color: vars.colors.white,
    fontSize: vars.fontSizes.xsmall,
})

export const emphasis = style({
    marginLeft: '6px',
    fontWeight: vars.fontWeights.bold,
})

export const resetButton = style({
    border: '0 !important',
    backgroundColor: `${vars.colors.transparent[800]} !important`,
    color: `${vars.colors.primary} !important`,
})

export const resetInput = style({
    color: `${vars.colors.white}`,
})
