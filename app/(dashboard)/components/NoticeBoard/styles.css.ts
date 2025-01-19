import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    width: '100%',
    height: '100%',
    backgroundColor: vars.colors.white,
    padding: '30px',
    borderRadius: '12px',
})

export const announcement = style({
    color: vars.colors.black,
    fontSize: vars.fontSizes.large,
    fontWeight: vars.fontWeights.extraBold,
})

export const noticeItem = style({
    display: 'flex',
    gap: '20px',
    marginTop: '10px',
    marginBottom: '20px',
})

export const imageWrapper = style({
    width: '100px',
    height: 'auto',
    borderRadius: '12px',
    overflow: 'hidden',
})

export const image = style({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
})

export const contentsWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    flex: 1,
})

export const title = style({
    fontWeight: vars.fontWeights.bold,
    color: vars.colors.black,
})

export const description = style({
    fontSize: vars.fontSizes.small,
    color: vars.colors.gray[800],
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
})
