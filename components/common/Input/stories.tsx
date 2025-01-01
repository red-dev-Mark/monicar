import Input from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    args: {
        inputSize: 'medium',
        placeholder: 'Enter text',
        type: 'text',
    },
    tags: ['autodocs'],
    argTypes: {
        inputSize: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
    },
}

export default meta

type StoryType = StoryObj<typeof Input>

export const Small: StoryType = {
    args: {
        inputSize: 'small',
        placeholder: 'Small input',
    },
}

export const Medium: StoryType = {
    args: {
        inputSize: 'medium',
        placeholder: 'Medium input',
    },
}

export const Large: StoryType = {
    args: {
        inputSize: 'large',
        placeholder: 'Large input',
    },
}
