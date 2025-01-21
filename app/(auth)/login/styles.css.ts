import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url('/images/sign-in-background-desktop.jpg')`,
    backgroundSize: 'cover',
})

export const swiper = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})
export const introduceMessage = style({
    color: vars.colors.white,
    textAlign: 'center',
    fontSize: vars.fontSizes.xlarge,
    fontWeight: vars.fontWeights.bold,
})

export const formContainer = style({
    display: 'flex',
    gap: '36px',
    flexDirection: 'column',
})

export const logoContainer = style({
    display: 'flex',
    gap: '12px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

export const form = style({
    display: 'flex',
    gap: '18px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})
export const buttonWrapper = style({
    width: '100%',
    marginTop: '12px',
})
export const description = style({
    color: vars.colors.white,
    fontSize: vars.fontSizes.xsmall,
})

export const bold = style({
    fontWeight: vars.fontWeights.bold,
})

export const resetButton = style({
    border: '0 !important',
    backgroundColor: `${vars.colors.transparent[800]} !important`,
    color: `${vars.colors.primary} !important`,
})

// 하얀 로고
// 이미지 자르기
