import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    width: '100%',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
})

export const overlay = style({
    position: 'absolute',
    inset: 0,
    backgroundColor: vars.colors.shadow[400],
})

export const content = style({
    position: 'absolute',
    left: '120px',
    display: 'flex',
    gap: '380px',
    flexDirection: 'column',
})

export const heading = style({
    marginTop: '4px',
    color: vars.colors.white,
    fontSize: '48px',
    fontWeight: vars.fontWeights.bold,
})

export const bottomSection = style({
    display: 'flex',
    gap: '8px',
    flexDirection: 'column',
})

export const title = style({
    marginLeft: '4px',
    color: vars.colors.white,
    fontSize: vars.fontSizes.xlarge,
    fontWeight: vars.fontWeights.bold,
})

export const message = style({
    marginLeft: '4px',
    marginBottom: '28px',
    color: vars.colors.white,
    fontWeight: vars.fontWeights.bold,
    whiteSpace: 'pre-line',
    letterSpacing: '0.8px',
})

export const button = style({
    color: `${vars.colors.primary} !important`,
    backgroundColor: `${vars.colors.white}  !important`,
    fontSize: `${vars.fontSizes.large} !important`,
})
