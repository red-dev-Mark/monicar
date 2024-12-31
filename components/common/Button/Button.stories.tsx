import { fn } from '@storybook/test'

import { Button } from '.'
// import { Button } from '@/components/common/Button'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    args: {
        onClick: fn(),
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary'],
        },
    },
}

export default meta

type StoryType = StoryObj<typeof Button>

export const Primary: StoryType = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
    },
}

export const Secondary: StoryType = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
    },
}
