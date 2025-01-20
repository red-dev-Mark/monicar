import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const container = style({
    width: '100%',
    height: '100%',
    backgroundColor: styles.colors.dashboard,
    padding: '30px',
    overflowY: 'auto',
})

export const contents = style({
    backgroundColor: styles.colors.white,
    padding: '24px',
    borderRadius: '11px',
})

export const header = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '16px',
    borderBottom: `1px solid ${styles.colors.gray[200]}`,
    marginBottom: '24px',
})

export const title = style({
    color: styles.colors.black,
    fontWeight: styles.fontWeights.bold,
    fontSize: styles.fontSizes.xlarge,
})

export const date = style({
    color: styles.colors.gray[600],
    fontSize: styles.fontSizes.small,
})

export const imageWrapper = style({
    position: 'relative',
    width: '100%',
    marginTop: '24px',
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'center',
})

export const children = style({
    color: styles.colors.black,
    whiteSpace: 'pre-line',
    lineHeight: '2',
})
