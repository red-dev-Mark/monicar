import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const panel = style({
    width: '480px',
    position: 'absolute',
    top: '12px',
    right: '12px',
    display: 'flex',
    gap: '12px',
    flexDirection: 'column',
    zIndex: vars.zIndex.dropdown,
})
