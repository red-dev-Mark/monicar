'use client'
import { useRouter, useSearchParams } from 'next/navigation'

import TabMenu from '@/components/common/TabMenu'

const InspectionStatusTabs = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const status = searchParams.get('status') || 'REQUIRED'

    const handleTabChange = (newStatus: string | null) => {
        router.push(`/dashboard/inspection?status=${newStatus || 'REQUIRED'}`)
    }

    return <TabMenu value={status} onChange={handleTabChange} />
}

export default InspectionStatusTabs
