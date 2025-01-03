import BaseInput from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof BaseInput> = {
    title: 'Components/Input/BaseInput',
    component: BaseInput,
    parameters: {
        layout: 'centered',
        controls: {
            exclude: ['className'],
        },
    },
    args: {
        placeholder: 'Enter text',
        type: 'text',
    },
    tags: ['autodocs'],
    argTypes: {
        isError: {
            control: 'boolean',
            description: '에러 상태 표시',
        },
    },
}

export default meta

type StoryType = StoryObj<typeof BaseInput>

export const Base: StoryType = {
    args: {
        placeholder: 'Input',
    },
}

export const Error: StoryType = {
    args: {
        placeholder: 'Error',
        isError: true,
    },
}
