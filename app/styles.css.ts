import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const container = style({
    width: '100%',
    height: '100%',
    backgroundColor: styles.colors.dashboard,
    display: 'flex',
    padding: '30px',
})

export const textWrapper = style({
    color: styles.colors.black,
    fontWeight: styles.fontWeights.extraBold,
    display: 'flex',
    flexDirection: 'column',
    margin: '0px 40px',
})

export const secondLine = style({
    fontSize: styles.fontSizes.xlarge,
})

export const headerWrapper = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
})

export const searchInputWrapper = style({
    padding: '0px 20px',
    flex: '1',
})

export const leftSection = style({
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
})

export const rightSection = style({
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
})

export const inspectionStatusWrapper = style({
    width: '100%',
    height: 'auto',
    padding: '0 20px',
})

export const vehicleStatusWrapper = style({
    width: '100%',
    height: 'auto',
    padding: '0 20px',
})

export const mapWrapper = style({
    width: '100%',
    height: '100vh',
    borderRadius: '12px',
    padding: '0 20px',
})

export const calendarWrapper = style({
    width: '100%',
    height: 'auto',
    padding: '0 20px',
})

export const noticeBoardWrapper = style({
    width: '100%',
    height: '100vh',
    padding: '0 20px',
})
