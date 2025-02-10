// 쿼리 스트링 제거
export const cleanUrlParams = () => {
    if (window.location.search) {
        window.history.replaceState(null, '', window.location.pathname)
    }
}
