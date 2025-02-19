import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    position: 'relative',
    width: '100%',
    height: '100vh',
    color: vars.colors.white,
})

export const buttonWrapper = style({
    width: '200px',
    position: 'absolute',
    top: '12px',
    right: '12px',
    zIndex: vars.zIndex.dropdown,
})
