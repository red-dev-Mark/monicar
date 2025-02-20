import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const button = style({
    position: 'absolute',
    left: '16px',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: vars.colors.white,
    zIndex: vars.zIndex.header,
})
