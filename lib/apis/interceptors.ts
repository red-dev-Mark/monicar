import { AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import { API_URL } from '@/constants/api'
import { httpClient } from '@/lib/apis/client'
import { tokenStorage } from '@/lib/utils/auth'
import { useAuthStore } from '@/stores/useAuthStore'

interface CustomRequestConfig extends InternalAxiosRequestConfig {
    isRequestAlready?: boolean
}

export const setupRequestInterceptor = (instance: AxiosInstance) => {
    instance.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            const accessToken = tokenStorage.getToken()
            config.headers.Authorization = accessToken

            return config
        },
        (error: AxiosError) => {
            return Promise.reject(error)
        },
    )
}

export const setupResponseInterceptor = (instance: AxiosInstance) => {
    instance.interceptors.response.use(
        (response: AxiosResponse) => {
            return response.data
        },
        async (error: AxiosError) => {
            const originalRequest = error.config as CustomRequestConfig

            if (error.response?.status === 401 && originalRequest && !originalRequest.isRequestAlready) {
                // TODO:  isRequestAlready 동작 여부 확인 (무한 요청이 이루어지는지 등)
                originalRequest.isRequestAlready = true

                const logout = useAuthStore((state) => state.logout)

                try {
                    // TODO: refresh token API URL 확인 (apl/v1이 붙는지 여부)
                    const response = await httpClient.post(`${API_URL}/auth/refresh`)
                    const newAccessToken = response.headers.authorization

                    tokenStorage.setToken(newAccessToken)
                    originalRequest.headers.Authorization = newAccessToken

                    return httpClient(originalRequest)
                } catch (error) {
                    // TODO: if문 조건 -> refresh token가 만료되었을 때의 메세지 등 조치
                    if (error === 'refresh token 만료 메세지 등') {
                        try {
                            await httpClient.post(`${API_URL}/auth/reissue`)
                            const response = await httpClient.post(`${API_URL}/auth/refresh`)
                            const newAccessToken = response.headers.authorization

                            tokenStorage.setToken(newAccessToken)
                            originalRequest.headers.Authorization = newAccessToken

                            return httpClient(originalRequest)
                        } catch (error) {
                            return Promise.reject(error)
                        }
                    }
                    logout()
                    return Promise.reject(error)
                }
            }
            return Promise.reject(error)
        },
    )
}
