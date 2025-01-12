import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const container = style({
    width: '620px',
    display: 'flex',
    backgroundColor: styles.colors.white,
    borderRadius: '12px',
    flexDirection: 'column',
    padding: '20px',
    gap: '16px',
    color: styles.colors.gray[800],
    fontWeight: styles.fontWeights.bold,
})

export const statusRow = style({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
})

const dotBase = style({
    width: '16px',
    height: '16px',
    borderRadius: '50%',
})

export const dots = {
    total: style([dotBase, { backgroundColor: styles.colors.pink[400] }]),
    active: style([dotBase, { backgroundColor: styles.colors.pink[600] }]),
    inactive: style([dotBase, { backgroundColor: styles.colors.green[500] }]),
    disabled: style([dotBase, { backgroundColor: styles.colors.blue }]),
}

export const text = style({
    flex: 1,
    fontSize: styles.fontSizes.medium,
})

const statusBarBase = style({
    width: '400px',
    height: '14px',
    borderRadius: '20px',
})

export const statusBars = {
    total: style([statusBarBase, { backgroundColor: styles.colors.pink[400] }]),
    active: style([statusBarBase, { backgroundColor: styles.colors.pink[600] }]),
    inactive: style([statusBarBase, { backgroundColor: styles.colors.green[500] }]),
    disabled: style([statusBarBase, { backgroundColor: styles.colors.blue }]),
}
