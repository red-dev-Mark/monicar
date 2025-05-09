import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { breakPoints, vars } from '@/styles/theme.css'

export const container = style({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    gap: '20px',
    backgroundColor: vars.colors.white,
    borderRadius: '12px',
    fontWeight: vars.fontWeights.bold,
    cursor: 'pointer',
    selectors: {
        '.dark &': {
            backgroundColor: vars.colors.darkBlue,
            border: `1px solid ${vars.colors.darkGray}`,
        },
    },
    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '0px',
            fontSize: vars.fontSizes.small,
            backgroundColor: 'transparent',
        },
    },
})

const iconWrapperBase = style({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
})

export const iconWrapper = styleVariants({
    bell: [iconWrapperBase, { backgroundColor: vars.colors.pink[700] }],
    alert: [iconWrapperBase, { backgroundColor: vars.colors.yellow[200] }],
    button: [iconWrapperBase, { backgroundColor: vars.colors.green[300] }],
    check: [iconWrapperBase, { backgroundColor: vars.colors.purple[200] }],
})

export const icon = style({
    width: '24px',
    height: '24px',
})

export const statusCard = recipe({
    base: {
        width: '100%',
        height: '100%',
        borderRadius: '11px',
        color: vars.colors.gray[800],
        padding: '16px',
    },
    variants: {
        status: {
            REQUIRED: { backgroundColor: vars.colors.pink[200] },
            SCHEDULED: { backgroundColor: vars.colors.yellow[100] },
            INPROGRESS: { backgroundColor: vars.colors.green[100] },
            COMPLETED: { backgroundColor: vars.colors.purple[100] },
        },
    },
})

export const mobileStatusCard = style({
    transition: 'transform 0.3s ease',
    ':hover': {
        transform: 'scale(1.05)',
    },
    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            padding: '8px',
        },
    },
})

export const statusText = style({
    marginTop: '54px',
    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            marginTop: '10px',
            textAlign: 'center',
        },
    },
})

export const mobileStatusWrapper = style({
    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
})

export const count = style({
    fontSize: vars.fontSizes.small,
    backgroundColor: vars.colors.gray[700],
    color: vars.colors.white,
    borderRadius: '50%',
    width: '26px',
    height: '26px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    zIndex: vars.zIndex.default,
})
