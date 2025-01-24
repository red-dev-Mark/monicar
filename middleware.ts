// import { NextRequest, NextResponse } from 'next/server'

export const middleware = () => {
    // export async function middleware(request: NextRequest) {
    // const accessToken = request.cookies.getAll()
    // const { pathname } = request.nextUrl
    // const protectedRoutes = ['/dashboard', '/log', '/route', '/location']
    // if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    //     if (!accessToken) {
    //         return NextResponse.redirect(new URL('/signin', request.url))
    //     }
    // }
    // if (pathname === '/signin' && accessToken) {
    //     return NextResponse.redirect(new URL('/dashboard', request.url))
    // }
    // return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*', '/log/:path*', '/route', '/location', '/signin'],
}
