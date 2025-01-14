import { MODAL_MESSAGES } from '@/constants/ui'

type AlertButtonType = {
    variant: 'alert'
    confirmButton: string
}

type ConfirmButtonsType = {
    variant: 'confirm'
    confirmButton: string
    cancelButton: string
}

export type StatusType = AlertButtonType | ConfirmButtonsType

export type ModalMessageType = (typeof MODAL_MESSAGES.AUTH)[keyof typeof MODAL_MESSAGES.AUTH]
