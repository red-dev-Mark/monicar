import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    padding: '16px',
    textAlign: 'center',
})

export const tableHeader = style({
    paddingBottom: '16px',
    display: 'flex',
    fontWeight: vars.fontWeights.bold,
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
})

export const tableList = style({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
})

export const pagination = style({
    margin: '12px 0 8px',
})

export const speed = style({
    width: '20%',
})

export const timestamp = style({
    width: '30%',
})

export const location = style({
    width: '50%',
})
