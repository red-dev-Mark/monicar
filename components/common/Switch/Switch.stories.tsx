import Switch from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Components/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            defaultValue: 'md',
        },
    },
} satisfies Meta<typeof Switch>

export default meta

type StoryType = StoryObj<typeof meta>

// 기본 스위치
export const Default: StoryType = {
    args: {},
}

// 다양한 크기의 스위치들
export const Sizes: StoryType = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Switch size='xs' />
            <Switch size='sm' />
            <Switch size='md' />
            <Switch size='lg' />
            <Switch size='xl' />
        </div>
    ),
}
