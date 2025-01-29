import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end',
    zIndex: vars.zIndex.four,
})

export const buttonGroup = style({
    display: 'flex',
    width: '200px',
    justifyContent: 'center',
    gap: '12px',
})
