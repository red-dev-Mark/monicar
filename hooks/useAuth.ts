import { authService } from '@/lib/apis/auth'
import { useAuthStore } from '@/stores/useAuthStore'

export const useAuth = () => {
    const { setAuthLoading, setAuthError, login, logout } = useAuthStore()

    const handleLogin = async (email: string, password: string) => {
        setAuthLoading(true)
        try {
            await authService.postSignIn(email, password)
            login(email)
        } catch (error) {
            setAuthError(error instanceof Error ? error.message : '로그인에 실패하였습니다')
        } finally {
            setAuthLoading(false)
        }
    }

    const handleLogout = async () => {
        setAuthLoading(true)
        try {
            await authService.postSignOut()
            logout()
        } catch (error) {
            setAuthError(error instanceof Error ? error.message : '로그인에 실패하였습니다')
        } finally {
            window.location.href = '/signin'
            setAuthLoading(false)
        }
    }

    return {
        login: handleLogin,
        logout: handleLogout,
    }
}
