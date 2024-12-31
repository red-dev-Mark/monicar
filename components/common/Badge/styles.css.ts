import { style, styleVariants } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

import { BADGE_SHAPE, OPERATION_STATUS, VEHICLE_ROLE } from './constants'
export const base = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px 12px',
    fontSize: '14px',
    fontWeight: 'bold',
    borderWidth: '4px',
})

export const shape = styleVariants({
    [BADGE_SHAPE.RECTANGLE]: {
        borderRadius: '4px',
        width: '72px',
        height: '24px',
    },
    [BADGE_SHAPE.CIRCLE]: {
        borderRadius: '14px',
        width: '88px',
        height: '32px',
    },
})

export const variant = styleVariants({
    [OPERATION_STATUS.OPERATING]: {
        border: '1px red',
    },
    [OPERATION_STATUS.NOT_OPERATING]: {
        color: styles.colors.pink[600],
    },
    [OPERATION_STATUS.NOT_CONTROLLED]: {},

    [VEHICLE_ROLE.GENERAL]: {
        // backgroundColor
    },
    [VEHICLE_ROLE.COMMUTE]: {},
})
