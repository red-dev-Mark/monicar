import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    padding: '16px',
    textAlign: 'center',
})

export const tableHeader = style({
    paddingBottom: '16px',

    display: 'flex',
    gap: '24px',
    alignItems: 'center',

    fontWeight: vars.fontWeights.bold,
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
})

export const tableList = style({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
})

export const tableItem = style({
    padding: '18px 0px',
    display: 'flex',
    gap: '24px',
    color: vars.colors.black,
})

export const pagination = style({
    margin: '8px 0',
})

export const speed = style({
    width: '10%',
})

export const timestamp = style({
    width: '40%',
})

export const location = style({
    width: '50%',
})
