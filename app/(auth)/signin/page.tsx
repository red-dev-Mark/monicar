'use client'

import Image from 'next/image'
// import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { RoundButton } from '@/components/common/Button/RoundButton'
import SignInInput from '@/components/common/Input/SignInInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { useModal } from '@/hooks/useModal'
// import { authService } from '@/lib/apis/auth'
import { validateEmail, validatePassword } from '@/lib/utils/validation'

import * as styles from './styles.css'

const SignInPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { isOpen, modalMessage, closeModal, showMessage } = useModal()

    // const router = useRouter()

    const handleButtonSubmit = async () => {
        const emailValidation = validateEmail(email)
        const passwordValidation = validatePassword(password)
        console.log('zxcvzxcvxcvzxcv')
        if (!emailValidation.isValid) {
            console.log(emailValidation.message)
            showMessage(emailValidation.message!)
            return
        }

        if (!passwordValidation.isValid) {
            console.log(passwordValidation.message)
            showMessage(passwordValidation.message!)
            return
        }

        try {
            console.log('요청!')
            // const isSignIn = await authService.postSignIn(email, password)
            // if (isSignIn) {
            //     // console.log('현재 쿠키:', document.cookie)
            //     // await new Promise((resolve) => setTimeout(resolve, 500))
            //     // console.log('지연 후 쿠키:', document.cookie)
            //     router.push('/dashboard')
            // }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={styles.container}>
            <section className={styles.introSection}>
                <p className={styles.introduceMessage}>
                    실시간 지도 기반의 <br />
                    차량 관제 서비스를 경험해 보세요
                </p>
                <Image src={'/images/sign-in-map.png'} width={550} height={550} alt='지도' />
            </section>

            <section className={styles.authSection}>
                <div className={styles.authHeader}>
                    <Image src={'/logo.png'} width={180} height={120} alt='박스로고' />
                    <Image src={'/white-text-logo.png'} width={180} height={40} alt='텍스트로고' />
                </div>

                <div className={styles.authForm}>
                    <SignInInput
                        icon='/icons/sign-in-user-icon.svg'
                        placeholder='아이디를 입력해주세요'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <SignInInput
                        icon='/icons/sign-in-lock-icon.svg'
                        type='password'
                        placeholder='비밀번호를 입력해주세요'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <div className={styles.authAction}>
                        <RoundButton
                            size='large'
                            color='secondary'
                            className={styles.resetButton}
                            onClick={handleButtonSubmit}
                        >
                            로그인
                        </RoundButton>
                    </div>

                    <p className={styles.helpText}>
                        비밀번호를 잊으셨나요?<strong className={styles.emphasis}>관리자에게 문의해주세요</strong>
                    </p>
                </div>
            </section>

            <Modal
                isOpen={isOpen}
                message={modalMessage as ModalMessageType}
                variant={{ variant: 'alert', confirmButton: '확인' }}
                onClose={closeModal}
            />
        </div>
    )
}

export default SignInPage
