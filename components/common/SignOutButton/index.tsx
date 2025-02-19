import { useAuth } from '@/hooks/useAuth'
import { SignOutIcon } from '@/public/icons'

import * as styles from './styles.css'

const SignOutButton = () => {
    const { logout } = useAuth()

    return (
        <button className={styles.logoutButton} onClick={logout}>
            <SignOutIcon className={styles.icon} />
            <span>로그아웃</span>
        </button>
    )
}

export default SignOutButton
