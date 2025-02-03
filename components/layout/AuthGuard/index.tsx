'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useAuthStore } from '@/stores/useAuthStore'

interface AuthGuardProps {
    children: React.ReactNode
}

const PUBLIC_PATHS = ['/signin']

const AuthGuard = ({ children }: AuthGuardProps) => {
    // TODO: 미들웨어 해결 후 로컬 스토리지 관련 코드 삭제
    const logout = useAuthStore((state) => state.logout)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail')
        const isAuth = !!userEmail

        if (!PUBLIC_PATHS.includes(pathname) && !isAuth) {
            logout()
            router.push('/signin')
            return
        }

        if (pathname === '/signin' && isAuth) {
            router.push('/dashboard')
            return
        }
    }, [router, pathname, logout])

    return <>{children}</>
}

export default AuthGuard
