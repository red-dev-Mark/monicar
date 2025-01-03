import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const modal = style({
    width: '404px',
    padding: '54px 24px 32px 24px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    display: 'flex',
    flexDirection: 'column',
    gap: '36px',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: styles.colors.white,
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    borderRadius: '12px',
})

export const xButton = style({
    position: 'absolute',
    top: '12px',
    right: '12px',
})

export const message = style({
    padding: '0 32px',
    fontWeight: styles.fontWeights.bold,
    textAlign: 'center',
    lineHeight: 1.8,
})

export const buttonGroup = style({
    width: '100%',
    marginTop: '12px',
    padding: '0 8px',
    display: 'flex',
    gap: '16px',
})

export const button = style({
    display: 'block',
    width: '100%',
    height: '60px',
    border: '1px solid black',
    borderRadius: '10px',
})

export const overlay = style({
    width: '100%',
    height: '100dvh',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(0, 0, 0, 0.5)',
    zIndex: 999,
})
