import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const selectContainer = style({
    padding: '0 4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
})

export const selectGroup = style({
    display: 'flex',
    gap: '8px',
    marginBottom: '4px',
})

export const label = style({
    fontSize: vars.fontSizes.small,
    color: vars.colors.gray[700],
})

export const selectStyles = {
    input: {
        flex: 1,
        padding: '8px',
        borderRadius: '8px',
        border: `1px solid ${vars.colors.gray[200]}`,
        backgroundColor: vars.colors.white,
        fontSize: vars.fontSizes.small,
        color: vars.colors.gray[700],
        cursor: 'pointer',
        height: '38px',
        width: '92px',
    },
    dropdown: {
        borderRadius: '8px',
        border: `1px solid ${vars.colors.gray[200]}`,
        boxShadow: `0 4px 12px ${vars.colors.shadow[100]}`,
    },
    item: {
        fontSize: vars.fontSizes.small,
        color: vars.colors.gray[700],
        ':hover': {
            backgroundColor: vars.colors.gray[50],
        },
    },
}
