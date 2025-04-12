import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const tableWrapper = style({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    paddingBottom: '100px',
})

export const tableHeader = style({
    padding: '8px',
    fontWeight: vars.fontWeights.bold,
    backgroundColor: vars.colors.gray[50],
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
    borderRight: `1px solid ${vars.colors.gray[200]}`,
    textAlign: 'center',
    color: vars.colors.black,
    selectors: {
        '.dark &': {
            backgroundColor: vars.colors.darkGray,
            color: vars.colors.darkText,
            border: `1px solid ${vars.colors.darkGray}`,
        },
    },
})

export const tableCell = style({
    textAlign: 'center',
    padding: '8px',
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
    borderRight: `1px solid ${vars.colors.gray[200]}`,
    color: vars.colors.black,
    selectors: {
        '.dark &': {
            backgroundColor: vars.colors.darkBlue,
            color: vars.colors.darkText,
            border: `1px solid ${vars.colors.darkGray}`,
        },
    },
})

export const empty = style({
    margin: '50px',
    justifyContent: 'center',
    display: 'flex',
    fontWeight: vars.fontWeights.bold,
    color: vars.colors.gray[700],
    selectors: {
        '.dark &': {
            color: vars.colors.darkText,
        },
    },
})
