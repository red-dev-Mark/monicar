import React from 'react'

import { MODAL_MESSAGES } from '@/types/ui'

import SquareButton from '../Button/SquareButton'

import Modal from './index'

import type { Meta, StoryObj } from '@storybook/react'

// Mock AlertIcon 컴포넌트
const MockAlertIcon = () => (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
            stroke='currentColor'
            strokeWidth='2'
        />
        <path d='M12 8V12' stroke='currentColor' strokeWidth='2' />
        <circle cx='12' cy='16' r='1' fill='currentColor' />
    </svg>
)

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
}

export default meta

type StoryType = StoryObj<typeof Modal>

const ModalStory = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
        const modalRoot = document.createElement('div')
        modalRoot.id = 'modal-root'
        document.body.appendChild(modalRoot)

        return () => {
            document.body.removeChild(modalRoot)
        }
    }, [])

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    return (
        <div style={{ padding: '20px' }}>
            <SquareButton onClick={handleOpenModal}>모달 열기</SquareButton>
            <Modal
                message={MODAL_MESSAGES.AUTH.INVALID_CREDENTIALS}
                icon={<MockAlertIcon />}
                isOpen={isOpen}
                onClose={handleCloseModal}
                variant={{
                    variant: 'alert',
                    confirmButton: '확인',
                }}
            />
        </div>
    )
}

export const Alert: StoryType = {
    render: () => <ModalStory />,
}

export const Confirm: StoryType = {
    render: () => {
        const [isOpen, setIsOpen] = React.useState(false)

        React.useEffect(() => {
            const modalRoot = document.createElement('div')
            modalRoot.id = 'modal-root'
            document.body.appendChild(modalRoot)

            return () => {
                document.body.removeChild(modalRoot)
            }
        }, [])

        return (
            <div style={{ padding: '20px' }}>
                <SquareButton onClick={() => setIsOpen(true)}>확인 모달 열기</SquareButton>
                <Modal
                    message={MODAL_MESSAGES.AUTH.INVALID_CREDENTIALS}
                    icon={<MockAlertIcon />}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    variant={{
                        variant: 'confirm',
                        confirmButton: '확인',
                        cancelButton: '취소',
                    }}
                />
            </div>
        )
    },
}
