import NavItem from '.'

import type { Meta, StoryObj } from '@storybook/react'
const meta: Meta<typeof NavItem> = {
    title: 'Components/NavItem',
    component: NavItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        path: { control: 'text' },
        iconSrc: { control: 'text' },
    },
    decorators: [
        (Story) => (
            <ul>
                <Story />
            </ul>
        ),
    ],
}

export default meta

type StoryType = StoryObj<typeof NavItem>

export const dashboard: StoryType = {
    args: {
        label: '대시보드',
        path: '/',
        iconSrc: '/icons/home-icon.svg',
    },
}

export const location: StoryType = {
    args: {
        label: '위치 조회',
        path: '/location',
        iconSrc: '/icons/pin-icon.svg',
    },
}

export const route: StoryType = {
    args: {
        label: '경로 조회',
        path: '/route',
        iconSrc: '/icons/pie-chart-icon.svg',
    },
}

export const diary: StoryType = {
    args: {
        label: '운행 일지',
        path: '/diary',
        iconSrc: '/icons/clock-icon.svg',
    },
}

export const history: StoryType = {
    args: {
        label: '운행 내역',
        path: '/history',
        iconSrc: '/icons/send-icon.svg',
    },
}
