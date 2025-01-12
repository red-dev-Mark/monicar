import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { styles } from '@/styles/theme.css'

export const container = style({
    width: '620px',
    height: '180px',
    display: 'flex',
    alignItems: 'center',
    padding: '15px 15px',
    gap: '20px',
    backgroundColor: styles.colors.white,
    borderRadius: '12px',
})

const iconWrapperBase = style({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const iconWrappers = styleVariants({
    bell: [iconWrapperBase, { backgroundColor: styles.colors.pink[700] }],
    alert: [iconWrapperBase, { backgroundColor: styles.colors.yellow[200] }],
    button: [iconWrapperBase, { backgroundColor: styles.colors.green[300] }],
    check: [iconWrapperBase, { backgroundColor: styles.colors.purple[200] }],
})

export const icon = style({
    width: '24px',
    height: '24px',
})

export const statusCard = recipe({
    base: {
        width: '100%',
        height: '100%',
        borderRadius: '11px',
        color: styles.colors.gray[800],
        fontWeight: styles.fontWeights.bold,
        padding: '16px',
    },
    variants: {
        status: {
            required: { backgroundColor: styles.colors.pink[200] },
            scheduled: { backgroundColor: styles.colors.yellow[100] },
            inProgress: { backgroundColor: styles.colors.green[100] },
            completed: { backgroundColor: styles.colors.purple[100] },
        },
    },
})

export const statusText = style({
    marginTop: '54px',
})
