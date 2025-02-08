import Breadcrumbs from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Components/Breadcrumb',
    component: Breadcrumbs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>

export default meta
type StoryType = StoryObj<typeof meta>

export const Default: StoryType = {
    args: {
        type: '운행기록',
    },
}

export const Secondary: StoryType = {
    args: {
        type: '운행일지',
    },
}

export const Tertiary: StoryType = {
    args: {
        type: '일별 및 시간별 운행기록',
    },
}
