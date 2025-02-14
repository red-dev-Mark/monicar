'use client'

import { Group, Pagination } from '@mantine/core'

import Breadcrumbs from '@/components/common/Breadcrumbs'

import VehicleStatusPanel from '../components/VehicleStatusPanel'

import InspectionItem from './components/InspectionItem'
import TabMenu from './components/Tabs'
import * as styles from './styles.css'

const InspectionPage = () => {
    const inspectionData = {
        vehicleNumber: '123가4567',
        drivingDistance: 15000,
        name: '차량점검',
        status: 'REQUIRED' as const,
    }
    return (
        <div className={styles.container}>
            <Breadcrumbs
                breadcrumbsData={[
                    { title: '대시보드', isActive: false },
                    { title: '점검현황', isActive: true },
                ]}
            />

            <VehicleStatusPanel />

            <TabMenu></TabMenu>

            <InspectionItem
                vehicleNumber={inspectionData.vehicleNumber}
                drivingDistance={inspectionData.drivingDistance}
                name={inspectionData.name}
                status={inspectionData.status}
            />

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
