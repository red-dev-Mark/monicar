import { useState } from 'react'

import { useAuth } from '@/hooks/useAuth'
import { validateEmail, validatePassword } from '@/lib/utils/validation'

export const useLoginForm = (onError?: (message: string) => void) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useAuth()

    const validateFormData = () => {
        if (!email || !password) {
            return { isValid: false, error: '아이디와 비밀번호 모두 입력해주세요' }
        }

        const emailValidation = validateEmail(email)
        const passwordValidation = validatePassword(password)

        if (!emailValidation.isValid) {
            return { isValid: false, error: emailValidation.message }
        }

        if (!passwordValidation.isValid) {
            return { isValid: false, error: passwordValidation.message }
        }

        return { isValid: true, error: '' }
    }

    const submitLoginForm = async () => {
        const validate = validateFormData()
        if (!validate.isValid) {
            onError?.(validate.error!)
            return
        }
        return await login(email, password)
    }

    return {
        email,
        password,
        setEmail,
        setPassword,
        submitLoginForm,
    }
}
