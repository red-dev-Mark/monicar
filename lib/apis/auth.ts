import { API_URL } from '@/constants/api'
import { httpClient } from '@/lib/apis/client'

interface SignInRequest {
    userId: string
    password: string
}

export const authService = {
    postSignIn: async (email: string, password: string) => {
        const signInData: SignInRequest = {
            userId: email,
            password,
        }

        const response = await httpClient.post(`${API_URL}/api/v1/sign-in`, signInData)
        return response.data
    },
}
