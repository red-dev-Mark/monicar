import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const accordion = style({
    width: '390px',
    position: 'absolute',
    top: '12px',
    right: '12px',
    display: 'flex',
    gap: '12px',
    flexDirection: 'column',
    borderRadius: '12px',
    zIndex: vars.zIndex.dropdown,
    overflow: 'hidden',
})

export const container = style({
    padding: '16px',
    display: 'flex',
    gap: '24px',
    flexDirection: 'column',
})

export const bottomSection = style({
    display: 'flex',
    gap: '24px',
    flexDirection: 'column',
})

export const searchInputStyle = style({
    borderRadius: '8px',
    boxShadow: 'none',
})
