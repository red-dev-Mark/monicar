import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (request: NextRequest) => {
    const rememberCookie = request.cookies.get('remember-me-dev')?.value

    const { pathname } = request.nextUrl
    const protectedRoutes = ['/dashboard', '/log', '/route', '/location', 'live']

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
    matcher: ['/dashboard/:path*', '/log/:path*', '/route', '/location', '/signin'],
}
