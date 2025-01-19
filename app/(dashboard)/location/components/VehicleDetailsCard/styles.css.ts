import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const container = style({
    width: '580px',
    position: 'absolute',
    bottom: '2px',
    left: '2px',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    backgroundColor: styles.colors.white,
    borderRadius: '30px 30px 0 0',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
})

export const header = style({
    padding: '4px 0 12px 4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderBottom: `1px solid ${styles.colors.gray[200]}`,
})

export const headerContent = style({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
})

export const vehicleNumber = style({
    fontSize: styles.fontSizes.large,
    fontWeight: styles.fontWeights.bold,
})

export const tableWrapper = style({
    margin: '12px 0',
    border: `1px solid ${styles.colors.gray[400]}`,
    borderRadius: '8px',
    overflow: 'hidden',
})

export const table = style({
    width: '100%',
    fontSize: styles.fontSizes.small,
    borderCollapse: 'collapse',
})

export const tableHeader = style({
    width: '20%',
    padding: '8px',
    textAlign: 'left',
    fontWeight: styles.fontWeights.bold,
    backgroundColor: styles.colors.gray[50],
    borderBottom: `1px solid ${styles.colors.gray[200]}`,
    borderRight: `1px solid ${styles.colors.gray[200]}`,
})

export const tableCell = style({
    padding: '8px',
    borderBottom: `1px solid ${styles.colors.gray[200]}`,
    borderRight: `1px solid ${styles.colors.gray[200]}`,
})
