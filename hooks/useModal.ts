import { useState } from 'react'

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [modalMessage, setModalMessage] = useState('')

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    console.log('Hook: ', isOpen)

    const showMessage = (message: string) => {
        setModalMessage(message)
        openModal()
    }

    return {
        isOpen,
        modalMessage,
        openModal,
        closeModal,
        showMessage,
    }
}
