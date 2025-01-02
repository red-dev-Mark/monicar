import BaseInput from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof BaseInput> = {
    title: 'Components/BaseInput',
    component: BaseInput,
    parameters: {
        layout: 'centered',
    },
    args: {
        placeholder: 'Enter text',
        type: 'text',
    },
    tags: ['autodocs'],
    argTypes: {},
}

export default meta

type StoryType = StoryObj<typeof BaseInput>

export const Input: StoryType = {
    args: {
        placeholder: 'Input',
    },
}
