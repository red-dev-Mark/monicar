import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (request: NextRequest) => {
    const REMEMBER_COOKIE_NAME = process.env.NEXT_PUBLIC_REMEMBER_COOKIE || ''
    const rememberCookie = request.cookies.get(REMEMBER_COOKIE_NAME)?.value

    const { pathname } = request.nextUrl

    console.log('----------------------------------------------')
    console.log('Remember 쿠키: ', rememberCookie)
    console.log('----------------------------------------------')

    const protectedRoutes = ['/dashboard', '/log', '/route', '/location']

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
