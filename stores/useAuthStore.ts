import { create } from 'zustand'

interface User {
    email: string
}

interface AuthState {
    user: User | null
    isAuthenticated: boolean
    isAuthLoading: boolean
    authError: string | null

    setAuthLoading: (isAuthLoading: boolean) => void
    setAuthError: (authError: string) => void
    login: (email: string) => void
    logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    isAuthLoading: false,
    authError: null,

    setAuthLoading: (isAuthLoading: boolean) => set({ isAuthLoading }),
    setAuthError: (authError: string) => set({ authError }),

    login: (email: string) =>
        set({
            user: { email },
            isAuthenticated: true,
            isAuthLoading: false,
            authError: null,
        }),
    logout: () =>
        set({
            user: null,
            isAuthenticated: false,
            isAuthLoading: false,
            authError: null,
        }),
}))
