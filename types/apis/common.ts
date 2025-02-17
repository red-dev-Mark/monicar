export interface Result<T> {
    isSuccess: boolean
    data?: T
    error?: string
}

export interface ErrorResponse {
    isSuccess: boolean
    errorMessage: string[]
    errorCode: number
    timestamp: number
}
