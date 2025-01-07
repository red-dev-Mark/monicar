'use client'

import { createPortal } from 'react-dom'

import { AlertIcon } from '@/public/icons'

import SquareButton from '../Button/SquareButton'

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
                            <SquareButton onClick={onClose} color='primary'>
                                {variant.cancelButton}
                            </SquareButton>
                            <SquareButton color='primary'>{variant.confirmButton}</SquareButton>
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
