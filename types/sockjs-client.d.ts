declare module 'sockjs-client' {
    class SockJS {
        constructor(url: string, _reserved?: any, options?: any)
        close(code?: number, reason?: string): void
        send(data: string): void
        onopen: () => void
        onmessage: (error: { data: string }) => void
        onclose: (error: { code: number; reason: string; wasClean: boolean }) => void
        onerror: (error: any) => void
    }
    export default SockJS
}
