import { httpClient } from '@/lib/apis'

export const authService = {
    // 로그인 요청
    signIn: async (userId: string, password: string) => {
        const formData = new FormData()
        formData.append('userId', userId)
        formData.append('password', password)
        formData.append('remember-me', 'true')

        const response = await httpClient.post(`api/v1/sign-in`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        if (!response.data.isSuccess) {
            switch (response.data.errorCode) {
                case 9999:
                    return { isSuccess: false, error: 'INVALID_CREDENTIALS' }
                default:
                    return { isSuccess: false, error: 'SERVICE_ERROR' }
            }
        }

        const { nickname, email, companyName } = response.data.result
        localStorage.setItem('email', email)
        localStorage.setItem('company_name', companyName)
        localStorage.setItem('nickname', nickname)
        return { isSuccess: true }
    },
    // 로그아웃 요청
    signOut: async () => {
        await httpClient.post(`api/v1/logout`)
    },
}
