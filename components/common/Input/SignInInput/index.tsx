import Image from 'next/image'

import BaseInput from '@/components/common/Input/BaseInput'

import * as styles from './styles.css'

interface SignInInputProps {
    icon: string
    type?: string
}

const SignInInput = ({ icon, type }: SignInInputProps) => {
    return (
        <div className={styles.signInInput}>
            <div className={styles.iconWrapper}>
                <Image src={icon} alt='로그인 검색 아이콘' width={24} height={24} />
            </div>
            <BaseInput type={type} className={styles.resetInput} />
        </div>
    )
}

export default SignInInput
