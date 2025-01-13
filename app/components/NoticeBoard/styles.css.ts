import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const container = style({
    width: '100%',
    height: '100%',
    backgroundColor: styles.colors.white,
    gap: '20px',
    padding: '20px',
    borderRadius: '12px',
})

export const noticeItem = style({
    display: 'flex',
    gap: '10px',
    marginBottom: '10px',
})

export const imageWrapper = style({
    width: '100px',
    height: '86px',
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
    fontWeight: styles.fontWeights.bold,
    color: styles.colors.black,
})

export const description = style({
    fontSize: styles.fontSizes.small,
    color: styles.colors.gray[800],
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
})
