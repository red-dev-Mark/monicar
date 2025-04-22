import { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

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
            if ((error?.status === 401 || error?.status === 403) && !window.location.pathname.startsWith('/signin')) {
                window.location.href = '/signin'
            }

            return Promise.reject(error)
        },
    )
}
