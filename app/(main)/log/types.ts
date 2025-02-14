import { LogListItemModel } from '@/types/log'

export interface LogListResponse {
    content: LogListItemModel[]
    page: number
    size: number
    totalElements: number
    totalPages: number
    first: boolean
    last: boolean
}

export type ApiType<T> = {
    isSuccess: boolean
    message: string
    result: T
}
