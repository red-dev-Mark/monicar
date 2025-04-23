'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ColorRing } from 'react-loader-spinner'

import { RoundButton } from '@/components/common/Button/RoundButton'
import SignInInput from '@/components/common/Input/SignInInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { MODAL_MESSAGES } from '@/constants/ui'
import { useLoginForm } from '@/hooks/useLoginForm'
import { useModal } from '@/hooks/useModal'
import { useAuthStore } from '@/stores/useAuthStore'

import * as styles from './styles.css'

const SignInPage = () => {
    const [isRedirecting, setIsRedirecting] = useState(false)

    const { isModalOpen, message, closeModal, openModalWithMessage } = useModal()
    const { isAuthLoading } = useAuthStore()

    const { email, password, setEmail, setPassword, submitLoginForm } = useLoginForm(openModalWithMessage)

    const router = useRouter()

    const handleSubmit = async () => {
        const result = await submitLoginForm()

        if (!result) {
            return
        }

        if (!result.success) {
            switch (result?.error) {
                case 'INVALID_CREDENTIALS':
                    openModalWithMessage(MODAL_MESSAGES.AUTH.INVALID_CREDENTIALS)
                    break
                case 'SERVICE_ERROR':
                    openModalWithMessage(MODAL_MESSAGES.AUTH.SERVER_ERROR)
                    break
                default:
                    openModalWithMessage(MODAL_MESSAGES.AUTH.UNKNOWN)
                    break
            }
            return
        }

        setIsRedirecting(true)
        router.push('/dashboard')
    }

    const isLoading = isAuthLoading || isRedirecting

    return (
        <div className={styles.container}>
            <Image src={'/images/sign-in-background-desktop.jpg'} fill alt='지도' className='object-cover' />

            <div className={styles.content}>
                <section className={styles.introSection}>
                    <p className={styles.introduceMessage}>
                        실시간 지도 기반의 <br />
                        차량 관제 서비스를 경험해 보세요
                    </p>
                    <Image src={'/images/sign-in-map.png'} width={550} height={550} alt='지도' priority />
                </section>

                <section className={styles.signInSection}>
                    <div className={styles.signInHeader}>
                        <Image src={'/logo.png'} width={180} height={120} alt='박스로고' />
                        <Image src={'/white-text-logo.png'} width={180} height={40} alt='텍스트로고' />
                    </div>

                    <div className={styles.signInForm}>
                        <SignInInput
                            icon='/icons/sign-in-user-icon.svg'
                            placeholder='아이디를 입력해주세요'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            onSubmit={handleSubmit}
                        />
                        <SignInInput
                            icon='/icons/sign-in-lock-icon.svg'
                            type='password'
                            placeholder='비밀번호를 입력해주세요'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            onSubmit={handleSubmit}
                        />

                        <div className={styles.buttonWrapper}>
                            <RoundButton
                                size='large'
                                color='secondary'
                                className={styles.resetButton}
                                onClick={handleSubmit}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <ColorRing
                                        visible={true}
                                        height='40'
                                        width='40'
                                        ariaLabel='color-ring-loading'
                                        wrapperStyle={{}}
                                        wrapperClass='color-ring-wrapper'
                                        colors={['#ff385c', '#cf6b81', '#fdced4', '#00b087', '#ed9684']}
                                    />
                                ) : (
                                    '로그인'
                                )}
                            </RoundButton>
                        </div>

                        <p className={styles.helpText}>
                            비밀번호를 잊으셨나요?<strong className={styles.emphasis}>관리자에게 문의해주세요</strong>
                        </p>
                    </div>
                </section>

                <Modal
                    isOpen={isModalOpen}
                    message={message as ModalMessageType}
                    variant={{ variant: 'alert', confirmButton: '확인' }}
                    onClose={closeModal}
                />
            </div>
        </div>
    )
}

export default SignInPage
