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
    argTypes: {
        isError: {
            control: 'boolean',
            description: '에러 상태 표시',
        },
        messageType: {
            control: 'text',
            description: '에러나 안내 메시지 표시',
        },
        disabled: {
            control: 'boolean',
            description: '비활성화 상태 표시',
        },
        readOnly: {
            control: 'boolean',
            description: '읽기 전용 상태 표시',
        },
    },
}

export default meta

type StoryType = StoryObj<typeof BaseInput>

export const Input: StoryType = {
    args: {
        placeholder: 'Input',
    },
}

export const ErrorInput: StoryType = {
    args: {
        placeholder: 'ErrorInput',
        isError: true,
    },
}

export const DisabledInput: StoryType = {
    args: {
        placeholder: 'Disabled Input',
        disabled: true,
    },
}

export const ReadOnlyInput: StoryType = {
    args: {
        placeholder: 'Read Only Input',
        readOnly: true,
        value: 'Read Only Input',
    },
}
