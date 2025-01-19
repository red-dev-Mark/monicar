'use client'

import dynamic from 'next/dynamic'

const LocationPage = dynamic(() => import('./LocationPage'), {
    ssr: false,
})

export default LocationPage
