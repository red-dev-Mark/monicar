'use client'

import { Skeleton } from '@mantine/core'
import { Suspense } from 'react'

import Route from './Route'

const RoutePage = () => {
    return (
        <Suspense fallback={<Skeleton />}>
            <Route />
        </Suspense>
    )
}

export default RoutePage
