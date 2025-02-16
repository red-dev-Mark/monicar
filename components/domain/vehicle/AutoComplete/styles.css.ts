import { style } from '@vanilla-extract/css'

import { breakPoints, vars } from '@/styles/theme.css'

export const container = style({
    width: '92%',
    maxHeight: '260px',
    marginTop: '4px',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '0 0 12px 12px',
    overflow: 'auto',
    border: `1px solid ${vars.colors.gray[200]}`,

    '::-webkit-scrollbar': {
        width: '4px',
    },

    '::-webkit-scrollbar-track': {
        backgroundColor: vars.colors.white,
    },

    '::-webkit-scrollbar-thumb': {
        background: vars.colors.gray[500],
        borderRadius: '2px',
    },

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            width: '100%',
            maxHeight: '200px',
            marginTop: '2px',
        },
    },
})

export const item = style({
    width: '100%',
    padding: '10px 16px',
    color: vars.colors.black,
    backgroundColor: vars.colors.white,
    cursor: 'pointer',

    ':hover': {
        backgroundColor: vars.colors.gray[100],
    },
})

export const vehicleNumber = style({})
