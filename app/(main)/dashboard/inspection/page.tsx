'use client'

import { Suspense } from 'react'

import Inspection from './Inspection'

const InspectionPage = () => {
    return (
        <div>
            <Suspense fallback={<div>서스펜스 불러오는 중!</div>}>
                <Inspection />
            </Suspense>
        </div>
    )
}

export default InspectionPage
