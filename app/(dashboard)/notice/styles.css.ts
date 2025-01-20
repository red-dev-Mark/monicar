import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    width: '100%',
    height: '100%',
    backgroundColor: vars.colors.dashboard,
    padding: '30px',
    overflowY: 'auto',
})

export const contents = style({
    backgroundColor: vars.colors.white,
    padding: '24px',
    borderRadius: '11px',
})

export const header = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '16px',
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
    marginBottom: '24px',
})

export const title = style({
    color: vars.colors.black,
    fontWeight: vars.fontWeights.bold,
    fontSize: vars.fontSizes.xlarge,
})

export const date = style({
    color: vars.colors.gray[600],
    fontSize: vars.fontSizes.small,
})

export const imageWrapper = style({
    position: 'relative',
    width: '100%',
    marginTop: '24px',
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'center',
})

export const children = style({
    color: vars.colors.black,
    whiteSpace: 'pre-line',
    lineHeight: '2',
})
