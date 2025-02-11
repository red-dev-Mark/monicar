import { useRouter, useSearchParams } from 'next/navigation'

import { removeSpaces } from '@/lib/utils/string'

export const useQueryParams = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const getQuery = (key: string) => {
        return searchParams.get(key)
    }

    const addQuery = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams)
        params.set(key, removeSpaces(value))
        router.replace(`?${params.toString()}`)
    }

    const addQueries = (queries: Record<string, string | number>) => {
        const params = new URLSearchParams(searchParams)
        Object.entries(queries).forEach(([key, value]) => {
            params.set(key, removeSpaces(String(value)))
        })
        router.replace(`?${params.toString()}`)
    }

    const removeQuery = (key: string) => {
        const params = new URLSearchParams(searchParams)
        params.delete(key)
        router.replace(`?${params.toString()}`)
    }

    const clearAllQueries = () => {
        router.replace(window.location.pathname)
    }

    return {
        getQuery,
        addQuery,
        addQueries,
        removeQuery,
        clearAllQueries,
    }
}
