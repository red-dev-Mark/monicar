import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    padding: '16px',
    display: 'flex',
    gap: '24px',
    flexDirection: 'column',
})

export const searchSection = style({
    display: 'flex',
    gap: '8px',
    flexDirection: 'column',
})

export const sectionTitle = style({
    marginBottom: '8px',
    color: vars.colors.gray[800],
    fontSize: vars.fontSizes.mediumPlus,
    fontWeight: vars.fontWeights.bold,
})

export const searchInputStyle = style({
    borderRadius: '8px',
    boxShadow: 'none',
})

export const buttonWrapper = style({
    marginTop: '16px',
})
