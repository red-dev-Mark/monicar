import { authService } from '@/lib/apis'
import { useAuthStore } from '@/stores/useAuthStore'

export const useAuth = () => {
    const { setAuthLoading, setAuthError, logout } = useAuthStore()

    const handleLogin = async (email: string, password: string) => {
        setAuthLoading(true)
        try {
            const response = await authService.signIn(email, password)
            return !response.isSuccess ? { success: false, error: response.error } : { success: true, error: '' }
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : '알 수 없는 오류가 발생하였습니다',
            }
        } finally {
            setAuthLoading(false)
        }
    }

    const handleLogout = async () => {
        setAuthLoading(true)
        try {
            await authService.signOut()
            setAuthError(null)
            logout()
        } catch (error) {
            setAuthError(error instanceof Error ? error.message : '로그아웃에 실패하였습니다')
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
