import { httpClient } from '@/lib/apis/client'

interface SignInRequestModel {
    // TODO: userId -> email 요청
    userId: string
    password: string
}

export const authService = {
    postSignIn: async (email: string, password: string) => {
        const signInData: SignInRequestModel = {
            userId: email,
            password,
        }

        const response = await httpClient.post(`api/v1/sign-in`, signInData)

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
    postSignOut: async () => {
        const response = await httpClient.post(`api/v1/logout`)

        console.log(response)
    },
}
