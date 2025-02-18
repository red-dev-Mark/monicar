'use client'

import { Suspense } from 'react'

import Route from '@/app/(main)/route/Route'

const RoutePage = () => {
    return (
        <Suspense fallback={<div>서스펜스 불러오는 중!</div>}>
            <Route />
        </Suspense>
    )
}

export default RoutePage
