import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const container = style({
    position: 'relative',
    width: '100%',
    height: '100vh',
})

export const searchInputWrapper = style({
    width: '390px',
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    zIndex: 10,
})

export const vehicleStatusWrapper = style({
    position: 'absolute',
    top: '6.5rem',
    right: '2rem',
    zIndex: 10,
})

export const singleVehicleInfo = style({
    padding: '6px 12px',
    position: 'absolute',
    bottom: '48px',
    left: '50%',
    transform: 'translateX(-50%)',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    color: styles.colors.white,
    fontWeight: styles.fontWeights.bold,
    backgroundColor: styles.colors.black,
    borderRadius: '8px',
})
