import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const resetInput = style({
    height: '56px',
    color: vars.colors.black,
    backgroundColor: vars.colors.shadow[400],
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
    boxShadow: `0px 4px 4px 0px  ${vars.colors.shadow[400]}`,
})

export const iconWrapper = style({
    width: '56px',
    height: '56px',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    backgroundColor: vars.colors.white,
    boxShadow: `0px 2px 2px 2px ${vars.colors.shadow[500]}`,
    borderRadius: '50%',
})
