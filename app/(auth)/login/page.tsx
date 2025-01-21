import Image from 'next/image'

import { RoundButton } from '@/components/common/Button/RoundButton'
import SignInInput from '@/components/common/Input/SignInInput'

import * as styles from './styles.css'

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.swiper}>
                <p className={styles.introduceMessage}>
                    실시간 지도 기반의 <br />
                    차량 관제 서비스를 경험해 보세요.
                </p>
                <Image src={'/images/sign-in-1.png'} width={800} height={600} alt='박스로고' />
            </div>

            <div className={styles.formContainer}>
                <div className={styles.logoContainer}>
                    <Image src={'/logo.png'} width={180} height={120} alt='박스로고' />
                    <Image src={'/text-logo.png'} width={200} height={40} alt='텍스트로고' />
                </div>

                <div className={styles.form}>
                    <SignInInput icon='/icons/sign-in-user-icon.svg' placeholder='아이디를 입력해주세요' />
                    <SignInInput
                        icon='/icons/sign-in-lock-icon.svg'
                        type='password'
                        placeholder='비밀번호를 입력해주세요'
                    />

                    <div className={styles.buttonWrapper}>
                        <RoundButton size='large' color='secondary' className={styles.resetButton}>
                            로그인
                        </RoundButton>
                    </div>

                    <p className={styles.description}>
                        비밀번호를 잊으셨나요? <span className={styles.bold}>관리자에게 문의해주세요.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
