import { authService } from '@/lib/apis/auth'
import { useAuthStore } from '@/stores/useAuthStore'

export const useAuth = () => {
    const { setAuthLoading, setAuthError, login, logout } = useAuthStore()

    const handleLogin = async (email: string, password: string) => {
        setAuthLoading(true)
        try {
            const accessToken = await authService.postSignIn(email, password)
            login(email)
            localStorage.setItem('accessToken', accessToken)
        } catch (error) {
            setAuthError(error instanceof Error ? error.message : '로그인에 실패하였습니다')
        } finally {
            setAuthLoading(false)
        }
    }

    const handleLogout = () => {
        logout()
        localStorage.removeItem('accessToken')
    }

    return {
        login: handleLogin,
        logout: handleLogout,
    }
}
