'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import * as styles from './styles.css'

interface ModalProps {
    isOpen?: boolean
    icon?: string
    message: string
    confirmText: string
    closeText?: string
    onConfirm?: () => void
    onClose: () => void
}

const Modal = ({
    isOpen = false,
    icon = '/icons/alert-icon.svg',
    message,
    confirmText,
    closeText,
    onConfirm,
    onClose,
}: ModalProps) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    if (!isOpen || !mounted) return null

    const isCloseButton = closeText

    const modalContent = (
        <>
            <div className={styles.modal}>
                {!isCloseButton && (
                    <button onClick={onClose} className={styles.xButton} aria-label='모달 닫기 버튼'>
                        <Image src={'/icons/clear-icon.svg'} alt='' width={36} height={36} />
                    </button>
                )}

                <Image src={icon} alt='' width={76} height={76} />

                <p className={styles.message}>{message}</p>

                <div className={styles.buttonGroup}>
                    {isCloseButton && (
                        <button onClick={onClose} className={styles.button}>
                            {closeText}
                        </button>
                    )}
                    <button onClick={onConfirm} className={styles.button}>
                        {confirmText}
                    </button>
                </div>
            </div>

            <div
                onClick={!isCloseButton ? onClose : undefined}
                className={`${styles.overlay} ${!isCloseButton ? styles.clickableOverlay : ''}`}
                role='presentation'
            />
        </>
    )

    return createPortal(modalContent, document.body)
}

export default Modal
