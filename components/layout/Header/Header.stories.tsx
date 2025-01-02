import Header from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
        controls: {
            exclude: ['className'],
        },
        viewport: {
            defaultViewport: 'mobile',
        },
    },
    tags: ['autodocs'],
    args: {
        title: 'Header Title',
    },
}

export default meta

type StoryType = StoryObj<typeof Header>

export const Default: StoryType = {
    args: {
        title: 'Header Title',
        isBackButton: false,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile',
        },
    },
}
