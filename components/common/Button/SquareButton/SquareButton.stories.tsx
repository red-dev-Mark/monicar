import SquareButton from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Components/Button/SquareButton',
    component: SquareButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        color: {
            control: 'select',
            options: ['dark', 'primary', 'gray', 'white', 'transparent'],
            description: '버튼 색상',
        },
        children: {
            control: 'text',
            description: '버튼 내용',
        },
        onClick: { action: 'clicked' },
    },
} satisfies Meta<typeof SquareButton>

export default meta
type StoryType = StoryObj<typeof SquareButton>

export const Primary: StoryType = {
    args: {
        color: 'primary',
        children: 'Primary Button',
    },
}

export const Dark: StoryType = {
    args: {
        color: 'dark',
        children: 'Dark Button',
    },
}

export const Gray: StoryType = {
    args: {
        color: 'gray',
        children: 'Gray Button',
    },
}

export const White: StoryType = {
    args: {
        color: 'white',
        children: 'White Button',
    },
}

export const Transparent: StoryType = {
    args: {
        color: 'transparent',
        children: 'Transparent Button',
    },
}
