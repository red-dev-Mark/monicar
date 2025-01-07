import { RoundButton } from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Components/Button/RoundButton',
    component: RoundButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'large'],
            description: '버튼 크기',
        },
        color: {
            control: 'select',
            options: ['secondary', 'primary'],
            description: '버튼 색상',
        },
        children: {
            control: 'text',
            description: '버튼 내용',
        },
        onClick: { action: 'clicked' },
    },
} satisfies Meta<typeof RoundButton>

export default meta
type StoryType = StoryObj<typeof RoundButton>

export const small: StoryType = {
    args: {
        size: 'small',
        color: 'primary',
        children: 'small',
    },
}

export const Large: StoryType = {
    args: {
        size: 'large',
        color: 'primary',
        children: 'Large',
    },
}

export const secondary: StoryType = {
    args: {
        size: 'large',
        color: 'secondary',
        children: 'Black',
    },
}
export const Primary: StoryType = {
    args: {
        size: 'large',
        color: 'primary',
        children: 'Pink',
    },
}
