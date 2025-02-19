import { style, keyframes } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const bounce = keyframes({
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-15px)' },
    '100%': { transform: 'translateY(0)' },
})

const pulse = keyframes({
    '0%': { transform: 'scale(1)', opacity: 0.5 },
    '70%': { transform: 'scale(2)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 0.5 },
})

const fadeInOut = keyframes({
    '0%': { opacity: 0.6 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0.6 },
})

export const container = style({
    position: 'relative',
    width: '100%',
    height: '100%',
})

export const overlay = style({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
})
export const pinContainer = style({
    position: 'relative',
    width: '80px',
    height: '80px',
    marginBottom: '16px',
})

export const pin = style({
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '24px',
    height: '24px',
    margin: '-12px 0 0 -12px',
    backgroundColor: vars.colors.primary,
    borderRadius: '50% 50% 50% 0',
    transform: 'rotate(-45deg)',
    animation: `${bounce} 1s infinite`,
    '::after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '12px',
        height: '12px',
        margin: '-6px 0 0 -6px',
        backgroundColor: '#fff',
        borderRadius: '50%',
    },
})

export const pulseCircle = style({
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '40px',
    height: '40px',
    margin: '-20px 0 0 -20px',
    backgroundColor: 'rgba(255, 107, 107, 0.2)',
    borderRadius: '50%',
    transform: 'rotateX(55deg)',
    animation: `${pulse} 1.5s infinite`,
})

export const text = style({
    fontSize: '16px',
    fontWeight: '500',
    color: '#495057',
    animation: `${fadeInOut} 2s infinite`,
})
