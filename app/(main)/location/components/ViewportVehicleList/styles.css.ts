import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    width: '390px',
    height: '436px',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    backgroundColor: vars.colors.white,
    borderRadius: '12px 12px 0 0',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
})

export const header = style({
    paddingBottom: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
})

export const title = style({
    fontSize: vars.fontSizes.large,
    fontWeight: vars.fontWeights.bold,
})

export const vehicleList = style({
    marginTop: '12px',
    display: 'flex',
    gap: '4px',
    flexDirection: 'column',
    overflowY: 'auto',

    '::-webkit-scrollbar': {
        width: '4px',
    },

    '::-webkit-scrollbar-track': {
        background: 'transparent',
    },

    '::-webkit-scrollbar-thumb': {
        background: vars.colors.gray[500],
        borderRadius: '2px',
    },
})

export const listHeader = style({
    marginRight: '12px',
    display: 'flex',
    justifyContent: 'flex-end',
    color: vars.colors.gray[700],
    fontSize: vars.fontSizes.small,
})

export const vehicleCount = style({
    margin: '0 2px',
    fontWeight: vars.fontWeights.bold,
})

export const vehicleItem = style({
    padding: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '12px',

    userSelect: 'none',
    cursor: 'pointer',

    selectors: {
        '&:hover': {
            backgroundColor: vars.colors.gray[100],
        },
    },
})

export const vehicleNumber = style({
    marginLeft: '-32px',
    fontSize: vars.fontSizes.large,
})

export const closeButton = style({
    position: 'absolute',
    right: '16px',

    opacity: 0.7,
    transition: 'opacity 0.2s ease',

    ':hover': {
        opacity: 1,
    },
})

export const emptyState = style({
    height: '100%',
    paddingBottom: '24px',
    display: 'flex',
    gap: '4px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    color: vars.colors.gray[700],
    fontSize: vars.fontSizes.medium,
    fontWeight: vars.fontWeights.bold,
})
