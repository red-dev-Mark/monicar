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
            options: ['black', 'pink'],
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
        color: 'pink',
        children: 'small',
    },
}

export const Large: StoryType = {
    args: {
        size: 'large',
        color: 'pink',
        children: 'Large',
    },
}

export const Black: StoryType = {
    args: {
        size: 'large',
        color: 'black',
        children: 'Black',
    },
}
export const Pink: StoryType = {
    args: {
        size: 'large',
        color: 'pink',
        children: 'Pink',
    },
}
