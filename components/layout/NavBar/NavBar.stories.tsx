import NavBar from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof NavBar> = {
    title: 'Layout/NavBar',
    component: NavBar,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <div style={{ height: '100vh' }}>
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
}

export default meta

type StoryType = StoryObj<typeof NavBar>

export const Default: StoryType = {}
