'use client'

import { createPortal } from 'react-dom'

import { AlertIcon } from '@/public/icons'

import { BaseButton } from '../Button/BaseButton'

import * as styles from './styles.css'
import { StatusType, ModalMessageType } from './types'

interface ModalProps {
    isOpen?: boolean
    icon: React.ReactNode
    message: ModalMessageType
    onClose: () => void
    variant: StatusType
}

const Modal = ({ isOpen = false, icon = <AlertIcon />, message, variant, onClose }: ModalProps) => {
    if (!isOpen) return null
    const modalRoot = document.getElementById('modal-root')
    if (!isOpen || !modalRoot) return null

    const handleOverlayClick = () => {
        if (variant.variant === 'alert') {
            onClose?.()
        }
    }

    return createPortal(
        <>
            <div className={styles.overlay} onClick={handleOverlayClick} role='presentation' />
            <div className={styles.modal} role='dialog' aria-modal='true'>
                {icon && <div>{icon}</div>}
                {message && <p className={styles.message}>{message}</p>}
                <div className={styles.buttonWrapper}>
                    {variant.variant === 'confirm' ? (
                        <>
                            <BaseButton onClick={onClose} color='primary'>
                                {variant.cancelButton}
                            </BaseButton>
                            <BaseButton color='primary'>{variant.confirmButton}</BaseButton>
                        </>
                    ) : (
                        <BaseButton onClick={onClose} color='primary'>
                            {variant.confirmButton}
                        </BaseButton>
                    )}
                </div>
            </div>
        </>,
        modalRoot,
    )
}

export default Modal
