import Modal from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <div style={{ height: '640px' }}>
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
    argTypes: {
        isOpen: {
            description: '모달의 표시 여부',
            control: 'boolean',
        },
        icon: {
            description: '모달 상단에 표시될 아이콘 경로',
            control: 'text',
        },
        message: {
            description: '모달에 표시될 메시지',
            control: 'text',
        },
    },
}

export default meta

type StoryType = StoryObj<typeof Modal>

export const Alert: StoryType = {
    args: {
        isOpen: true,
        message: '알림 메시지입니다.',

        onClose: () => alert('닫기 클릭'),
    },
}

export const Confirm: StoryType = {
    args: {
        isOpen: true,
        icon: '/icons/alert-icon.svg',
        message: '정말 삭제하시겠습니까?',

        onClose: () => alert('취소 클릭'),
    },
    parameters: {
        docs: {
            disable: true,
        },
    },
}

export const LongMessage: StoryType = {
    args: {
        isOpen: true,
        message: '이것은 매우 긴 메시지입니다. 모달의 레이아웃이 깨지지 않는지 확인하기 위한 테스트용 메시지입니다.',
        onClose: () => alert('취소 클릭'),
    },
    parameters: {
        docs: {
            disable: true,
        },
    },
}
