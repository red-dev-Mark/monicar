'use client'

import Image from 'next/image'
import { useState } from 'react'

import { RoundButton } from '@/components/common/Button/RoundButton'
import SignInInput from '@/components/common/Input/SignInInput'
import { authService } from '@/lib/apis/auth'

import * as styles from './styles.css'

const SignInPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleButtonSubmit = async () => {
        await authService.postSignIn(email, password)
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
        </div>
    )
}

export default SignInPage
