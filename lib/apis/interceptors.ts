import { AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import { API_URL } from '@/constants/api'
import { httpClient } from '@/lib/apis/client'
import { useAuthStore } from '@/stores/useAuthStore'

interface CustomRequestConfig extends InternalAxiosRequestConfig {
    isRequestAlready?: boolean
}

export const setupRequestInterceptor = (instance: AxiosInstance) => {
    instance.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
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
            return response
        },
        async (error: AxiosError) => {
            const originalRequest = error.config as CustomRequestConfig

            if (error.response?.status === 401 && originalRequest && !originalRequest.isRequestAlready) {
                // TODO:  isRequestAlready 동작 여부 확인 (무한 요청이 이루어지는지 등)
                originalRequest.isRequestAlready = true

                const logout = useAuthStore.getState().logout

                console.log('401 에러입니다!!')

                try {
                    await httpClient.post(`${API_URL}/auth/refresh`)

                    return httpClient(originalRequest)
                } catch (error) {
                    logout()
                    window.location.href = '/signin'
                    return Promise.reject(error)
                }
            }
            return Promise.reject(error)
        },
    )
}
