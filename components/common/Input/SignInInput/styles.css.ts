import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const resetInput = style({
    height: '56px',
    color: vars.colors.black,
    backgroundColor: vars.colors.transparent[500],
    border: 0,
    boxShadow: 'none',
    paddingLeft: '72px',
    paddingRight: '28px',
})

export const signInInput = style({
    width: '342px',
    height: '60px',
    display: 'flex',
    position: 'relative',
    border: `2px solid ${vars.colors.gray[200]}`,
    borderRadius: '30px',
})

export const iconWrapper = style({
    width: '60px',
    height: '60px',
    position: 'absolute',
    left: '-2px',
    top: '-2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    backgroundColor: vars.colors.white,
    borderRadius: '50%',
    zIndex: 10,
})
