import { useState } from 'react'

import { useDisclosure } from '@/hooks/useDisclosure'

export const useModal = () => {
    const [message, setMessage] = useState('')
    const [isModalOpen, { open: openModal, close: closeModal }] = useDisclosure()

    const openModalWithMessage = (message: string) => {
        console.log('modal message: ', message)
        setMessage(message)
        openModal()
    }

    return {
        isModalOpen,
        message,
        closeModal,
        openModalWithMessage,
    }
}
