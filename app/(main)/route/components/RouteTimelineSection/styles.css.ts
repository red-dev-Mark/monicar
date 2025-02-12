import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const accordion = style({
    width: '100%',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    gap: '12px',
    flexDirection: 'column',
    borderRadius: '12px 12px 0 0',
    zIndex: vars.zIndex.dropdown,
    overflow: 'hidden',
})

export const container = style({
    height: '460px',
    padding: '16px 24px',
    position: 'relative',
    textAlign: 'center',
})

export const header = style({
    display: 'flex',
    justifyContent: 'end',
})

export const tableHeader = style({
    padding: '16px 0',
    position: 'relative',
    display: 'flex',
    fontWeight: vars.fontWeights.bold,
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
    zIndex: 10,
})

export const selectWrapper = style({
    position: 'absolute',
    top: '16px',
    right: '16px',
    zIndex: 11,
})

export const tableList = style({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
})

export const pagination = style({
    position: 'absolute',
    bottom: '36px',
    left: '50%',
    transform: 'translateX(-50%)',
})

export const timestamp = style({
    width: '40%',
})

export const speed = style({
    width: '20%',
})

export const location = style({
    width: '40%',
})
