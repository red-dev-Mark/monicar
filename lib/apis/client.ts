import axios from 'axios'
import { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import { API_URL } from '@/constants/api'

export const httpClient = axios.create({
    baseURL: API_URL,
    headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
    },
    timeout: 10000,
})

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
        (error: AxiosError) => {
            return Promise.reject(error)
        },
    )
}
