import { MODAL_MESSAGES } from './constants'

type SingleButtonType = {
    variant: 'single'
    confirmButton?: string
}

type DualButtonsType = {
    variant: 'dual'
    confirmButton?: string
    cancelButton?: string
}

export type ButtonType = SingleButtonType | DualButtonsType

export type ModalMessageType = (typeof MODAL_MESSAGES.AUTH)[keyof typeof MODAL_MESSAGES.AUTH]
