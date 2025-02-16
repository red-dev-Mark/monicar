import { style } from '@vanilla-extract/css'

import { breakPoints, vars } from '@/styles/theme.css'

export const container = style({
    width: '100%',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    // '@media': {
    //     [`screen and (max-width: ${breakPoints.mobile}px)`]: {
    //         width: '380px',
    //         position: 'relative',
    //         left: 0,
    //         gap: '360px',
    //     },
    // },
})

export const content = style({
    position: 'absolute',
    padding: '24px',
    display: 'flex',
    gap: '276px',
    alignItems: 'center',
})

export const introSection = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            display: 'none',
        },
    },
})

export const introduceMessage = style({
    marginBottom: '-24px',
    color: vars.colors.white,
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: vars.fontWeights.bold,
})

export const signInSection = style({
    display: 'flex',
    gap: '44px',
    flexDirection: 'column',

    '@media': {
        [`screen and (max-width: ${breakPoints.mobile}px)`]: {
            gap: '144px',
        },
    },
})

export const signInHeader = style({
    display: 'flex',
    gap: '12px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

export const signInForm = style({
    display: 'flex',
    gap: '18px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

export const buttonWrapper = style({
    width: '100%',
    marginTop: '12px',
})

export const helpText = style({
    color: vars.colors.white,
    fontSize: vars.fontSizes.xsmall,
})

export const emphasis = style({
    marginLeft: '6px',
    fontWeight: vars.fontWeights.bold,
})

export const resetButton = style({
    border: '0 !important',
    backgroundColor: `${vars.colors.transparent[800]} !important`,
    color: `${vars.colors.primary} !important`,
})

export const resetInput = style({
    color: `${vars.colors.white}`,
})
