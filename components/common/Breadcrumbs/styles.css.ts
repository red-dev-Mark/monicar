import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const list = style({
    display: 'flex',
    alignItems: 'center',
    color: vars.colors.gray[500],
    width: 'fit-content',
    position: 'relative',
})

export const item = style({
    display: 'flex',
    alignItems: 'center',
    padding: '4px 26px',
    borderRadius: '0px 22px 22px 0px',
    backgroundColor: vars.colors.white,
    border: `1px solid ${vars.colors.gray[300]}`,
    boxShadow: vars.colors.shadow[100],
    fontWeight: vars.fontWeights.bold,
    selectors: {
        '&:not(:first-child)': {
            marginLeft: '-16px',
        },
        '&:nth-child(1)': {
            zIndex: vars.zIndex.component,
        },
        '&:nth-child(2)': {
            zIndex: vars.zIndex.base,
        },
        '&:nth-child(3)': {
            zIndex: vars.zIndex.default,
        },
        '.dark &': {
            backgroundColor: vars.colors.darkBlue,
            color: vars.colors.darkText,
            border: `1px solid ${vars.colors.darkGray}`,
        },
    },
})

export const activeItem = style({
    fontWeight: vars.fontWeights.bold,
    color: vars.colors.gray[600],
    backgroundColor: vars.colors.gray[200],
    selectors: {
        '.dark &': {
            backgroundColor: vars.colors.darkGray,
            color: vars.colors.darkText,
        },
    },
})
