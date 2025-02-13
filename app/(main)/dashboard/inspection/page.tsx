'use client'

import { Group, Pagination } from '@mantine/core'

import Breadcrumbs from '@/components/common/Breadcrumbs'

import VehicleStatusPanel from '../components/VehicleStatusPanel'

import TabMenu from './components/Tabs'

const InspectionPage = () => {
    return (
        <div>
            <Breadcrumbs
                breadcrumbsData={[
                    { title: '대시보드', isActive: false },
                    { title: '점검현황', isActive: true },
                ]}
            />

            <VehicleStatusPanel />

            <TabMenu></TabMenu>

            <div>
                <Pagination.Root total={1} color='#ff385c' boundaries={0}>
                    <Group gap={5} justify='center'>
                        <Pagination.First />
                        <Pagination.Previous />
                        <Pagination.Items />
                        <Pagination.Next />
                        <Pagination.Last />
                    </Group>
                </Pagination.Root>
            </div>
        </div>
    )
}

export default InspectionPage
