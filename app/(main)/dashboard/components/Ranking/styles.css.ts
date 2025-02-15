import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

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
