import { useDisclosure } from '@/hooks/useDisclosure'

export const useLoading = () => {
    const [isLoading, { open: startLoading, close: finishLoading }] = useDisclosure()

    return {
        isLoading,
        startLoading,
        finishLoading,
    }
}
