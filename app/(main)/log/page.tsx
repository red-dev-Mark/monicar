import { Skeleton } from '@mantine/core'
import { Suspense } from 'react'

import Log from './Log'

const LogPage = () => {
    return (
        <Suspense fallback={<Skeleton />}>
            <Log />
        </Suspense>
    )
}

export default LogPage
