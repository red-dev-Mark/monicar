import SideNavBar from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SideNavBar> = {
    title: 'Layout/NavBar',
    component: SideNavBar,
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

type StoryType = StoryObj<typeof SideNavBar>

export const Default: StoryType = {}
