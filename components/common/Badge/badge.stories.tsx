import { fn } from '@storybook/test'

import { BADGE_SHAPE, OPERATION_STATUS, VEHICLE_ROLE } from './constants'

import Badge from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    args: {
        onClick: fn(),
    },
    tags: ['autodocs'],
    argTypes: {
        shape: {
            control: 'select',
            options: Object.values(BADGE_SHAPE),
        },
        variant: {
            control: 'select',
            options: [...Object.values(OPERATION_STATUS), ...Object.values(VEHICLE_ROLE)],
        },
    },
}

export default meta

type StoryType = StoryObj<typeof Badge>

export const RectangleOperating: StoryType = {
    args: {
        shape: BADGE_SHAPE.RECTANGLE,
        variant: OPERATION_STATUS.OPERATING,
    },
}

export const RectangleNotOperating: StoryType = {
    args: {
        shape: BADGE_SHAPE.RECTANGLE,
        variant: OPERATION_STATUS.NOT_OPERATING,
    },
}

export const RectangleNotControlled: StoryType = {
    args: {
        shape: BADGE_SHAPE.RECTANGLE,
        variant: OPERATION_STATUS.NOT_CONTROLLED,
    },
}

export const CircleGeneral: StoryType = {
    args: {
        shape: BADGE_SHAPE.CIRCLE,
        variant: VEHICLE_ROLE.GENERAL,
    },
}

export const CircleCommute: StoryType = {
    args: {
        shape: BADGE_SHAPE.CIRCLE,
        variant: VEHICLE_ROLE.COMMUTE,
    },
}
