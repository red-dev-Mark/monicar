import Image from 'next/image'

import { RoundButton } from '@/components/common/Button/RoundButton'
import SignInInput from '@/components/common/Input/SignInInput'

import * as styles from './styles.css'

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div></div>
            <div>
                <div>
                    <Image src={'/logo.png'} width={100} height={50} alt='박스로고' />
                    <Image src={'/text-logo.png'} width={40} height={30} alt='텍스트로고' />
                </div>
                <div>
                    <SignInInput icon='/icons/sign-in-user-icon.svg' />
                    <SignInInput icon='/icons/sign-in-lock-icon.svg' type='password' />
                    <RoundButton size='large' color='secondary'>
                        로그인
                    </RoundButton>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
