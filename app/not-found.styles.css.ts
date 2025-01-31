import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    width: '100%',
    height: '100%',
    // display: 'flex',
    // gap: '244px',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundImage: `url('/images/page-not-found-desktop.jpg')`,
    backgroundSize: 'cover',
    backgroundImage: [
        'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5))',
        `url('/images/page-not-found-desktop.jpg')`,
    ],
    display: 'flex',
    alignItems: 'center',
})

export const content = style({
    marginLeft: '80px',
})

export const title = style({
    color: vars.colors.white,
    fontSize: vars.fontSizes.xxlarge,
    fontWeight: vars.fontWeights.bold,
})
