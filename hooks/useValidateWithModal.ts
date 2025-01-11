// import { useModal } from '@/hooks/useModal'
// import { validateVehicleNumber } from '@/lib/validation'

// export const useValidateWithModal = (stringValue: string) => {
//     const { isOpen, modalMessage, closeModal, showMessage } = useModal()

//     if (!stringValue) return

//     const validation = validateVehicleNumber(stringValue)

//     if (!validation.isValid) {
//         showMessage(validation.message!)
//         return
//     }

//     return { validation }
// }
