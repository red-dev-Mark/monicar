import { BaseButton } from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof BaseButton> = {
    title: 'Components/Button/BaseButton',
    component: BaseButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large', 'xlarge', 'xxlarge'],
            description: '버튼 크기를 설정합니다',
        },
        color: {
            control: 'select',
            options: ['dark', 'primary', 'transparent', 'white'],
            description: '버튼 색상을 설정합니다',
        },
        text: {
            control: 'text',
            description: '버튼 텍스트를 설정합니다',
        },
    },
}

export default meta

type StoryType = StoryObj<typeof BaseButton>

export const Default: StoryType = {
    args: {
        text: 'Primary',
        size: 'medium',
        color: 'primary',
    },
}

export const Small: StoryType = {
    args: {
        text: 'Small',
        size: 'small',
        color: 'primary',
    },
}

export const Medium: StoryType = {
    args: {
        text: 'Medium',
        size: 'medium',
        color: 'primary',
    },
}

export const Large: StoryType = {
    args: {
        text: 'Large',
        size: 'large',
        color: 'primary',
    },
}

export const Xlarge: StoryType = {
    args: {
        text: 'Xlarge',
        size: 'xlarge',
        color: 'primary',
    },
}

export const XXlarge: StoryType = {
    args: {
        text: 'XXlarge',
        size: 'xxlarge',
        color: 'primary',
    },
}

export const Dark: StoryType = {
    args: {
        text: 'Dark',
        size: 'medium',
        color: 'dark',
    },
}

export const Gray: StoryType = {
    args: {
        text: 'Gray',
        size: 'medium',
        color: 'gray',
    },
}

export const White: StoryType = {
    args: {
        text: 'White',
        size: 'medium',
        color: 'white',
    },
}

export const Disabled: StoryType = {
    args: {
        text: 'Disabled',
        size: 'medium',
        color: 'primary',
        disabled: true,
    },
}
