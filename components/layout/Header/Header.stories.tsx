import Header from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
    parameters: {
        layout: 'centered',
        controls: {
            exclude: ['className'],
        },
    },
    tags: ['autodocs'],
    args: {
        title: '헤더 제목',
    },
}

export default meta

type StoryType = StoryObj<typeof Header>

export const Default: StoryType = {
    args: {
        title: '헤더 제목',
    },
}

export const WithBackButton: StoryType = {
    args: {
        title: '헤더 제목',
        isBackButton: true,
        onBackButtonClick: () => alert('뒤로가기 동작'),
    },
}

export const WithCustomBackButtonAction: StoryType = {
    args: {
        title: '헤더 제목',
        isBackButton: true,
        onBackButtonClick: () => alert('커스텀 뒤로가기 동작'),
    },
}
