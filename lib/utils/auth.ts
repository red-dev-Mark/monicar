export const TOKEN_KEY = 'accessToken'

export const tokenStorage = {
    setToken: (token: string) => localStorage.setItem(TOKEN_KEY, token),
    getToken: () => localStorage.getItem(TOKEN_KEY),
    removeToken: () => localStorage.removeItem(TOKEN_KEY),
    hasToken: () => !!localStorage.getItem(TOKEN_KEY),
}
