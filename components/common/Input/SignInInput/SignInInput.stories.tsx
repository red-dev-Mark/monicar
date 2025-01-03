import SignInInput from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SignInInput> = {
    title: 'Components/Input/SignInInput',
    component: SignInInput,
    parameters: {
        layout: 'centered',
        controls: {
            exclude: ['icon'],
        },
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            description: '입력 필드의 타입 (text, password 등)',
            control: 'select',
            options: ['text', 'password'],
        },
    },
}

export default meta

type StoryType = StoryObj<typeof SignInInput>

export const Email: StoryType = {
    args: {
        icon: '/icons/sign-in-user-icon.svg',
        type: 'text',
    },
}

export const Password: StoryType = {
    args: {
        icon: '/icons/sign-in-lock-icon.svg',
        type: 'password',
    },
}
