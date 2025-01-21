import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: '24px 0px',
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
    color: vars.colors.gray[600],
})

export const headerTitle = style({
    flex: 1,
})

export const headerIcon = style({
    width: '24px',
    height: '24px',
})
