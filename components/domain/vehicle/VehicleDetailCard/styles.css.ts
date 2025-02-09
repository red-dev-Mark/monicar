import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    width: '390px',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    backgroundColor: vars.colors.white,
    borderRadius: '12px 12px 0 0',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
})

export const header = style({
    paddingBottom: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
})

export const headerContent = style({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
})

export const vehicleNumber = style({
    marginLeft: '-36px',
    fontSize: vars.fontSizes.large,
    fontWeight: vars.fontWeights.bold,
})

export const tableWrapper = style({
    margin: '12px 0',
    border: `1px solid ${vars.colors.gray[400]}`,
    borderRadius: '8px',
    overflow: 'hidden',
})

export const table = style({
    width: '100%',
    fontSize: vars.fontSizes.small,
    borderCollapse: 'collapse',
})

export const tableHeader = style({
    // width: '35%',
    padding: '8px',
    textAlign: 'left',
    fontWeight: vars.fontWeights.bold,
    backgroundColor: vars.colors.gray[50],
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
    borderRight: `1px solid ${vars.colors.gray[200]}`,
})

export const tableCell = style({
    padding: '8px',
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
    borderRight: `1px solid ${vars.colors.gray[200]}`,
})
