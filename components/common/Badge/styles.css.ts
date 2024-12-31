import { style, styleVariants } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

import { BADGE_SHAPE, OPERATION_STATUS, VEHICLE_ROLE } from './constants'

export const base = style({
    border: '1.5px solid',
})

export const shape = styleVariants({
    [BADGE_SHAPE.RECTANGLE]: {
        padding: '4px 12px 2px',
        fontSize: styles.fontSizes.small,
        borderRadius: '4px',
    },
    [BADGE_SHAPE.CIRCLE]: {
        padding: '4px 16px 2px',
        fontWeight: 'bold',
        borderRadius: '14px',
    },
})

const redStyle = {
    color: styles.colors.red,
    backgroundColor: styles.colors.pink[300],
}

const pinkStyle = {
    color: styles.colors.pink[600],
    backgroundColor: styles.colors.pink[100],
}

const greenStyle = {
    color: styles.colors.green[400],
    backgroundColor: styles.colors.green[200],
}

export const variant = styleVariants({
    [OPERATION_STATUS.OPERATING]: pinkStyle,
    [OPERATION_STATUS.NOT_OPERATING]: greenStyle,
    [OPERATION_STATUS.NOT_CONTROLLED]: redStyle,
    [VEHICLE_ROLE.GENERAL]: pinkStyle,
    [VEHICLE_ROLE.COMMUTE]: greenStyle,
})
