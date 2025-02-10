'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { AlertIcon } from '@/public/icons'

import SquareButton from '../Button/SquareButton'

import * as styles from './styles.css'
import { ModalMessageType, StatusType } from './types'

interface ModalProps {
    isOpen?: boolean
    icon?: React.ReactNode
    message: ModalMessageType
    variant: StatusType
    onClose: () => void
    onConfirm?: () => void
}

const Modal = ({
    isOpen = false,
    icon = <AlertIcon width={78} height={78} />,
    message,
    variant,
    onClose,
    onConfirm,
}: ModalProps) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    const handleOverlayClick = () => {
        if (variant.variant === 'alert') {
            onClose()
        }
    }
    if (!isOpen || !mounted) return null

    const modalRoot = document.getElementById('modal-root')
    if (!modalRoot) return null

    return createPortal(
        <>
            <div
                className={`${styles.overlay} ${variant.variant === 'alert' ? styles.clickableOverlay : ''}`}
                onClick={handleOverlayClick}
                role='presentation'
            />
            <div className={styles.modal} role='dialog' aria-modal='true'>
                {icon && <div>{icon}</div>}
                {message && <p className={styles.message}>{message}</p>}
                <div className={styles.buttonWrapper}>
                    {variant.variant === 'confirm' ? (
                        <>
                            <SquareButton onClick={onClose} color='primary'>
                                {variant.cancelButton}
                            </SquareButton>
                            <SquareButton color='primary' onClick={onConfirm}>
                                {variant.confirmButton}
                            </SquareButton>
                        </>
                    ) : (
                        <SquareButton onClick={onClose} color='primary'>
                            {variant.confirmButton}
                        </SquareButton>
                    )}
                </div>
            </div>
        </>,
        modalRoot,
    )
}

export default Modal
