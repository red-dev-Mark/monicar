import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const accordion = style({
    width: '600px',
    position: 'absolute',
    bottom: '12px',
    right: '12px',
    display: 'flex',
    gap: '12px',
    flexDirection: 'column',
    borderRadius: '12px',
    zIndex: vars.zIndex.dropdown,
    overflow: 'hidden',
})

export const container = style({
    height: '460px',
    padding: '16px 24px',
    position: 'relative',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
})

export const header = style({
    marginBottom: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const tableHeader = style({
    padding: '16px 0',
    position: 'relative',
    display: 'flex',
    fontWeight: vars.fontWeights.bold,
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
    zIndex: 10,
})

export const vehicleNumber = style({
    color: vars.colors.black,
    fontWeight: vars.fontWeights.bold,
    fontSize: vars.fontSizes.mediumPlus,
})

export const tableList = style({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
})

export const pagination = style({
    width: '100%',
    position: 'absolute',
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
})

export const timestamp = style({
    width: '30%',
})

export const speed = style({
    width: '20%',
})

export const location = style({
    width: '50%',
})
