import axios from 'axios'

import { API_URL } from '@/constants/api'

export const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
    },
    timeout: 10000,
})
