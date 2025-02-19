import { Skeleton } from '@mantine/core'
import { Suspense } from 'react'

import Location from './Location'

const LocationPage = () => {
    return (
        <Suspense fallback={<Skeleton />}>
            <Location />
        </Suspense>
    )
}

export default LocationPage
