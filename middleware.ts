import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (request: NextRequest) => {
    const REMEMBER_ME_COOKIE_NAME = process.env.REMEMBER_ME_COOKIE_NAME || 'remember-me' || 'remember-me-dev'
    const rememberCookie = request.cookies.get(REMEMBER_ME_COOKIE_NAME)?.value

    const { pathname } = request.nextUrl
    const protectedRoutes = ['/dashboard', '/log', '/route', '/location', '/live']

    if (protectedRoutes.some((route) => pathname.startsWith(route))) {
        if (!rememberCookie) {
            return NextResponse.redirect(new URL('/signin', request.url))
        }
    }

    if (pathname === '/signin' && rememberCookie) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*', '/log/:path*', '/route/:path*', '/location/:path*', '/live/:path*', '/signin'],
}
