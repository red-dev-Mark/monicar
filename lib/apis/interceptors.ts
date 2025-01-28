import { AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import { API_URL } from '@/constants/api'
import { httpClient } from '@/lib/apis/client'
import { useAuthStore } from '@/stores/useAuthStore'

interface CustomRequestConfig extends InternalAxiosRequestConfig {
    isRequestAlready?: boolean
}

interface ErrorResponse {
    errorCode: number
    message: string
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
        async (error: AxiosError<ErrorResponse>) => {
            const originalRequest = error.config as CustomRequestConfig
            const errorCode = error.response?.data?.errorCode

            if (originalRequest && !originalRequest.isRequestAlready) {
                // TODO:  isRequestAlready 동작 여부 확인 (무한 요청이 이루어지는지 등)
                originalRequest.isRequestAlready = true

                const logout = useAuthStore.getState().logout

                console.log('401 에러입니다!!')
                console.log(error)

                // try {
                //     await httpClient.post(`${API_URL}/auth/reissue`)

                //     return httpClient(originalRequest)
                // } catch (error) {
                //     logout()
                //     window.location.href = '/signin'
                //     return Promise.reject(error)
                // }
                try {
                    switch (errorCode) {
                        case 9995:
                            await httpClient.post(`${API_URL}/auth/refresh`)
                            return httpClient(originalRequest)

                        case 9994:
                            await httpClient.post(`${API_URL}/auth/reissue`)
                            return httpClient(originalRequest)

                        case 9993:
                            // logout()
                            window.location.href = '/signin'
                            return Promise.reject(error)

                        default:
                            return Promise.reject(error)
                    }
                } catch (retryError) {
                    logout()
                    window.location.href = '/signin'
                    return Promise.reject(retryError)
                }
            }
            return Promise.reject(error)
        },
    )
}
