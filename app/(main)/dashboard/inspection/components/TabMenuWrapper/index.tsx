'use client'

import { useRouter } from 'next/navigation'

import TabMenu from '@/components/common/TabMenu'
import { StatusType } from '@/types/vehicle'

interface TabProps {
    status: StatusType
}

const InspectionStatusTabs: React.FC<TabProps> = ({ status }) => {
    const router = useRouter()
    const handleTabChange = (newStatus: string | null) => {
        router.push(`/dashboard/inspection?status=${newStatus || 'REQUIRED'}`)
    }

    return <TabMenu value={status} onChange={handleTabChange} />
}

export default InspectionStatusTabs
