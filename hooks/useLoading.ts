import { useDisclosure } from '@/hooks/useDisclosure'

export const useLoading = () => {
    const [isLoading, { open: showLoading, close: hideLoading }] = useDisclosure()

    return {
        isLoading,
        showLoading,
        hideLoading,
    }
}
