import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    padding: '24px',
    borderRadius: '12px',
    backgroundColor: vars.colors.white,
    color: vars.colors.black,
    textAlign: 'center',
})

export const textWrapper = style({
    fontWeight: vars.fontWeights.extraBold,
    fontSize: vars.fontSizes.large,
})

export const dateWrapper = style({
    color: vars.colors.gray[500],
    fontSize: vars.fontSizes.small,
})

export const header = style({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '16px',
})

export const weekDays = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '12px',
    marginBottom: '8px',
    fontWeight: vars.fontWeights.extraBold,
    textAlign: 'center',
})

export const days = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '12px',
    fontWeight: vars.fontWeights.extraBold,
    textAlign: 'center',
})

export const today = style({
    width: '30px',
    height: '30px',
    backgroundColor: vars.colors.primary,
    borderRadius: '50%',
    color: vars.colors.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
})

export const weekend = style({
    color: vars.colors.gray[500],
})

export const weekendDate = style({
    color: vars.colors.gray[500],
})

export const divider = style({
    width: '100%',
    height: '1px',
    backgroundColor: vars.colors.gray[300],
    margin: '20px 0',
})

export const title = style({
    fontWeight: vars.fontWeights.bold,
    color: vars.colors.gray[800],
    margin: '10px',
})

export const messageContainer = style({
    display: 'flex',
    gap: '12px',
    position: 'relative',
})

export const messageList = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    width: '100%',
    padding: '24px',
})

export const messageWrapper = style({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    fontWeight: vars.fontWeights.extraBold,
    color: vars.colors.gray[600],
})

export const message = style({
    marginLeft: '30px',
})

export const activeMessageWrapper = style({
    color: vars.colors.primary,
    fontSize: vars.fontSizes.mediumPlus,
    transition: 'transform 0.7s ease',
    transform: 'scale(1.1)',
})
export const deactiveMessageWrapper = style({
    transition: 'transform 0.7s ease-in-out',
    transform: 'scale(1)',
})
