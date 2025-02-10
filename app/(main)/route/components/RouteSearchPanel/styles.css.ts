import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const accordion = style({
    width: '390px',
    position: 'absolute',
    top: '12px',
    left: '12px',
    zIndex: 10,
    backgroundColor: vars.colors.white,
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
})

export const accordionControl = style({
    width: '100%',
    padding: '16px',
    display: 'flex',
    gap: '18px',
    alignItems: 'center',
    color: vars.colors.white,
    backgroundColor: vars.colors.primary,
    fontSize: vars.fontSizes.small,
    fontWeight: vars.fontWeights.bold,
})

export const container = style({
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
})

export const searchSection = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
})

export const sectionTitle = style({
    fontSize: '18px',
    fontWeight: vars.fontWeights.bold,
    color: vars.colors.gray[800],
    marginBottom: '8px',
})

export const searchableDate = style({
    fontSize: vars.fontSizes.small,
    marginBottom: '8px',
    padding: '8px 12px',
    backgroundColor: vars.colors.gray[50],
    border: `1px solid ${vars.colors.gray[200]}`,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
})

export const searchableDateSpan = style({
    padding: '4px 8px',
    color: vars.colors.primary,
    fontWeight: vars.fontWeights.bold,
    backgroundColor: 'white',
    borderRadius: '4px',
    fontSize: vars.fontSizes.xsmall,
    border: `1px solid ${vars.colors.primary}`,
})

export const searchInputStyle = style({
    borderRadius: '8px',
    boxShadow: 'none',
})
