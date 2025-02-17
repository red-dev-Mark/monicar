import { style } from '@vanilla-extract/css'

import { breakPoints } from '@/styles/theme.css'

export const container = style({
    flex: 1,
    padding: '24px',
    borderRadius: '12px',
    display: 'flex',
    gap: '24px',
    flexDirection: 'column',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            padding: '0px',
            marginTop: '40px',
            gap: '10px',
        },
    },
})

export const noticeItem = style({
    width: '100%',
    display: 'flex',
    gap: '20px',
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
