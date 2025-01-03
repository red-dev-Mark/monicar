import { MessageType } from './types'

import Message from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Message> = {
    title: 'Components/Message',
    component: Message,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta

type StoryType = StoryObj<typeof Message>

export const ErrorMessage: StoryType = {
    args: {
        messageType: {
            category: 'ERROR',
            type: 'INVALID_SIGN_IN',
        } as const as MessageType,
        isError: true,
    },
}

export const SuccessMessage: StoryType = {
    args: {
        messageType: {
            category: 'SUCCESS',
            type: 'REGISTRATION_AVAILABLE',
        } as const as MessageType,
        isError: true,
    },
}
