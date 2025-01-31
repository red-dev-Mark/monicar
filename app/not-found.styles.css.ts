import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const page = style({
    width: '100%',
    height: '100vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/page-not-found-desktop.jpg')`,
    backgroundSize: 'cover',

    display: 'flex',
    alignItems: 'center',

    selectors: {
        '&:after': {
            backgroundColor: '#00000050',
        },
    },
})

export const container = style({
    marginLeft: '120px',
    display: 'flex',
    gap: '380px',
    flexDirection: 'column',
})

export const content = style({
    display: 'flex',
    gap: '8px',
    flexDirection: 'column',
})

export const pageNotFoundText = style({
    marginTop: '4px',
    color: vars.colors.white,
    fontSize: '48px',
    fontWeight: vars.fontWeights.bold,
})

export const title = style({
    marginLeft: '4px',
    color: vars.colors.white,
    fontSize: vars.fontSizes.xlarge,
    fontWeight: vars.fontWeights.bold,
})

export const introduce = style({
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
