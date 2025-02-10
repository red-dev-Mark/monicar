import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    // width: 'calc(100% - 24px)',
    width: '1080px',
    padding: '16px',
    position: 'absolute',
    bottom: '12px',
    left: '12px',

    textAlign: 'center',
    backgroundColor: vars.colors.white,
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    zIndex: 11,
})

export const tableHeader = style({
    display: 'flex',
    alignItems: 'center',

    paddingBottom: '16px',
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
    color: vars.colors.gray[600],
})

export const tableList = style({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
})

export const tableItem = style({
    display: 'flex',
    padding: '18px 0px',
    color: vars.colors.black,
    fontWeight: vars.fontWeights.bold,
    fontSize: vars.fontSizes.mediumPlus,
})

export const closeButton = style({
    position: 'absolute',
    top: '12px',
    right: '16px',

    opacity: 0.7,
    transition: 'opacity 0.2s ease',

    ':hover': {
        opacity: 1,
    },
})

export const index = style({
    width: '10%',
})

export const vehicleNumber = style({
    width: '15%',
})

export const speed = style({
    width: '10%',
})

export const timestamp = style({
    width: '30%',
})

export const location = style({
    width: '35%',
})
