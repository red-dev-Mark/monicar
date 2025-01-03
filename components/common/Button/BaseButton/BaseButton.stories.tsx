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
        children: {
            control: 'text',
            description: '버튼 텍스트를 설정합니다',
        },
    },
}

export default meta

type StoryType = StoryObj<typeof BaseButton>

export const Default: StoryType = {
    args: {
        children: 'Primary',
        size: 'medium',
        color: 'primary',
    },
}

export const Small: StoryType = {
    args: {
        children: 'Small',
        size: 'small',
        color: 'primary',
    },
}

export const Medium: StoryType = {
    args: {
        children: 'Medium',
        size: 'medium',
        color: 'primary',
    },
}

export const Large: StoryType = {
    args: {
        children: 'Large',
        size: 'large',
        color: 'primary',
    },
}

export const Xlarge: StoryType = {
    args: {
        children: 'Xlarge',
        size: 'xlarge',
        color: 'primary',
    },
}

export const XXlarge: StoryType = {
    args: {
        children: 'XXlarge',
        size: 'xxlarge',
        color: 'primary',
    },
}

export const Dark: StoryType = {
    args: {
        children: 'Dark',
        size: 'medium',
        color: 'dark',
    },
}

export const Gray: StoryType = {
    args: {
        children: 'Gray',
        size: 'medium',
        color: 'gray',
    },
}

export const White: StoryType = {
    args: {
        children: 'White',
        size: 'medium',
        color: 'white',
    },
}

export const Disabled: StoryType = {
    args: {
        children: 'Disabled',
        size: 'medium',
        color: 'primary',
        disabled: true,
    },
}

export const Transparent: StoryType = {
    args: {
        children: 'Transparent',
        size: 'medium',
        color: 'transparent',
    },
}
