import { keyframes, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@/styles/theme.css'

const fadeIn = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
})

export const vehicleNumber = recipe({
    base: {
        padding: '6px 16px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',

        transition: 'opacity 0.3s ease-in-out',
        animation: `${fadeIn} 0.3s ease-in-out forwards`,

        color: vars.colors.white,
        fontWeight: vars.fontWeights.bold,
        backgroundColor: vars.colors.black,
        borderRadius: '12px',
        cursor: 'pointer',
        zIndex: vars.zIndex.content,

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
    },
    variants: {
        size: {
            sm: {
                bottom: '32px',
            },
            lg: {
                bottom: '48px',
            },
        },
    },
    defaultVariants: {
        size: 'lg',
    },
})

export const closeButton = style({
    width: '20px',
    height: '20px',
    paddingTop: '1px',
    position: 'absolute',
    top: '-6px',
    right: '-6px',

    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',

    color: vars.colors.white,
    fontSize: '10px',
    backgroundColor: vars.colors.black,
    border: `1.5px solid ${vars.colors.white}`,
    borderRadius: '50%',
    cursor: 'pointer',

    opacity: 0.7,
    transition: 'opacity 0.2s ease',

    ':hover': {
        opacity: 1,
    },
})
