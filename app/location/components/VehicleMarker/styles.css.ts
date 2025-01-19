import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const vehicleCard = style({
    padding: '6px 16px',
    position: 'absolute',
    bottom: '48px',
    left: '50%',
    transform: 'translateX(-50%)',

    color: vars.colors.white,
    fontWeight: vars.fontWeights.bold,
    backgroundColor: vars.colors.black,
    borderRadius: '12px',
    cursor: 'pointer',

    selectors: {
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '-6px',
            left: '50%',
            transform: 'translateX(-50%)',
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: `8px solid ${vars.colors.black}`,
        },
    },
})

export const description = style({
    padding: '8px 16px',
    position: 'absolute',
    top: '34px',
    left: '50%',
    transform: 'translateX(-50%)',

    borderRadius: '12px',
    color: vars.colors.white,
    fontSize: vars.fontSizes.xsmall,
    fontWeight: vars.fontWeights.bold,
    backgroundColor: vars.colors.gray[800],
    textAlign: 'center',
})
