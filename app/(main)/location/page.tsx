import { Suspense } from 'react'

import Location from './Location'

const LocationPage = () => {
    return (
        // TODO: Suspense fallback 변경
        <Suspense fallback={<div>서스펜스 불러오는 중!</div>}>
            <Location />
        </Suspense>
    )
}

export default LocationPage
