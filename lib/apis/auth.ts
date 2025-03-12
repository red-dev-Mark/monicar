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

        const { nickname, email, companyName } = await authService.getUserInfo()
        localStorage.setItem('email', email)
        localStorage.setItem('company_name', companyName)
        localStorage.setItem('nickname', nickname)

        if (!response.data.isSuccess) {
            switch (response.data.errorCode) {
                case 9999:
                    // 인증 실패 (등록되지 않는 계정)
                    return { isSuccess: false, error: 'INVALID_CREDENTIALS' }
                default:
                    // 서비스 에러
                    return { isSuccess: false, error: 'SERVICE_ERROR' }
            }
        }

        return { isSuccess: true }
    },
    // 로그아웃 요청
    signOut: async () => {
        await httpClient.post(`api/v1/logout`)
    },
    // 현재 사용자 정보 조회
    getUserInfo: async () => {
        const response = await httpClient.get(`api/v1/me`)

        const { result } = response.data

        return {
            nickname: result.nickname,
            email: result.email,
            departmentName: result.departmentName,
            companyName: result.companyName,
        }
    },
}
