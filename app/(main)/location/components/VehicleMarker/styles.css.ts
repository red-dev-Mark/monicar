import { style, keyframes } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const fadeIn = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
})

export const vehicleCard = style({
    padding: '6px 16px',
    position: 'absolute',
    bottom: '48px',
    left: '50%',
    transform: 'translateX(-50%)',

    transition: 'opacity 0.3s ease-in-out',
    animation: `${fadeIn} 0.3s ease-in-out forwards`,

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
