import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (request: NextRequest) => {
    // const isDevelopment = process.env.NODE_ENV === 'development'

    console.log('Environment:', process.env.NODE_ENV) // 환경 확인
    console.log('Cookies:', request.cookies) // 쿠키 확인

    // const accessToken = request.cookies.get('access_token')
    // const accessToken = request.cookies
    // const { pathname } = request.nextUrl
    // console.log('----------------------------------------------')
    // console.log('액세스 토큰: ', accessToken)
    // console.log('----------------------------------------------')

    // const protectedRoutes = ['/dashboard', '/log', '/route', '/location']

    // if (isDevelopment) {
    // return NextResponse.next()
    // }

    // if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    //     if (!accessToken) {
    //         return NextResponse.redirect(new URL('/signin', request.url))
    //     }
    // }

    // if (pathname === '/signin' && accessToken) {
    //     return NextResponse.redirect(new URL('/dashboard', request.url))
    // }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*', '/log/:path*', '/route', '/location', '/signin'],
}
