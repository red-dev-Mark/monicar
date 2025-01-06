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
