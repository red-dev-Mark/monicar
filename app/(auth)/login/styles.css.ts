import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    height: '100%',
    display: 'flex',
    backgroundImage: `url('/images/sign-in-background-desktop.jpg')`,
    backgroundSize: 'cover',
})

export const swiper = style({})

export const formContainer = style({
    display: 'flex',
    gap: '24px',
    flexDirection: 'column',
})

export const logoContainer = style({})

export const form = style({
    display: 'flex',
    gap: '18px',
    flexDirection: 'column',
})
// export const container = style({})
// export const container = style({})
// export const container = style({})

export const resetButton = style({
    border: '0 !important',
    backgroundColor: `${vars.colors.transparent[800]} !important`,
    color: `${vars.colors.primary} !important`,
})
