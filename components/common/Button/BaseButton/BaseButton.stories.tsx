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
        children: 'Base Button',
    },
}
