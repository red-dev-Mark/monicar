import { RoundButton } from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof RoundButton> = {
    title: 'Components/Button/RoundButton',
    component: RoundButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'large'],
            description: '버튼 크기를 설정합니다',
        },
        color: {
            control: 'select',
            options: ['gray', 'white'],
            description: '버튼 색상을 설정합니다',
        },
        children: {
            control: 'text',
            description: '버튼 텍스트를 설정합니다',
        },
    },
}

export default meta

type StoryType = StoryObj<typeof RoundButton>

export const Default: StoryType = {
    args: {
        children: '기본 버튼',
        size: 'large',
        color: 'white',
    },
}

export const Small: StoryType = {
    args: {
        children: 'small',
        size: 'small',
        color: 'white',
    },
}

export const Large: StoryType = {
    args: {
        children: 'large',
        size: 'large',
        color: 'white',
    },
}

export const Transparent: StoryType = {
    args: {
        children: 'transparent',
        size: 'large',
        color: 'transparent',
    },
}
