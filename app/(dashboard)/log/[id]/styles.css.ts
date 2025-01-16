import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const container = style({
    width: '80%',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 30px',
    gap: '30px',
    backgroundColor: styles.colors.white,
    borderRadius: '30px 30px 0 0',
})

export const buttonGroup = style({
    display: 'flex',
    gap: '10px',
})

export const tableHeader = style({
    padding: '8px',
    fontWeight: styles.fontWeights.bold,
    backgroundColor: styles.colors.gray[50],
    borderBottom: `1px solid ${styles.colors.gray[200]}`,
    borderRight: `1px solid ${styles.colors.gray[200]}`,
    textAlign: 'center',
    color: styles.colors.black,
})

export const tableCell = style({
    textAlign: 'center',
    padding: '8px',
    borderBottom: `1px solid ${styles.colors.gray[200]}`,
    borderRight: `1px solid ${styles.colors.gray[200]}`,
    color: styles.colors.black,
})
