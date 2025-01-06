import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const overlay = style({
    position: 'fixed',
    top: 0,
    left: 0,
    inset: 0,
    width: '100%',
    height: '100dvh',
    opacity: 0.2,
    backgroundColor: styles.colors.black,
    zIndex: styles.zIndex.overlay,
})

export const clickableOverlay = style({
    cursor: 'pointer',
})

export const modal = style({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '404px',
    padding: '54px 24px 32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '36px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styles.colors.white,
    boxShadow: `0px 4px 4px 0px ${styles.colors.shadow[400]}`,
    zIndex: styles.zIndex.modal,
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
    color: styles.colors.black,
})

export const buttonWrapper = style({
    width: '100%',
    marginTop: '12px',
    padding: '0 8px',
    display: 'flex',
    gap: '16px',
})
