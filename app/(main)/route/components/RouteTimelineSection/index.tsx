import { Group, Pagination } from '@mantine/core'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import RouteTimelineItem from '@/app/(main)/route/components/RouteTimelineItem'
import Accordion from '@/components/common/Accordion'
import { useDisclosure } from '@/hooks/useDisclosure'
import { routeService } from '@/lib/apis'
import { vars } from '@/styles/theme.css'
import { PaginationInfo } from '@/types/common'
import { Route } from '@/types/route'

import * as styles from './styles.css'

const RouteTimelineSection = () => {
    const [activePage, setActivePage] = useState(1)
    const [routeDetail, setRouteDetail] = useState<Route[]>()
    const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>()

    const [isOpen, { open, close }] = useDisclosure()

    const searchParams = useSearchParams()

    useEffect(() => {
        const getVehicleDatail = async () => {
            try {
                const vehicleId = searchParams.get('vehicleId') || ''
                const startDate = searchParams.get('startDate') || ''
                const endDate = searchParams.get('endDate') || ''

                const response = await routeService.getVehicleRoutesDetail({
                    vehicleId,
                    startTime: startDate,
                    endTime: endDate,
                    page: activePage,
                })

                if (!response.isSuccess) return

                const { first, last, page, size, totalElements, totalPages } = response.data
                const { routes } = response.data.content[0]

                setRouteDetail(routes)
                setPaginationInfo({ first, last, page, size, totalElements, totalPages })
                open()
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error)
                    close()
                }
            }
        }
        getVehicleDatail()
    }, [searchParams, activePage, open, close])

    if (!isOpen || !routeDetail || !paginationInfo) return

    return (
        <Accordion variant='secondary' title='경로 상세목록'>
            <div className={styles.container}>
                <div className={styles.tableHeader}>
                    <p className={styles.timestamp}>시간</p>
                    <p className={styles.speed}>속도 (km/h)</p>
                    <p className={styles.location}>위치</p>
                </div>

                <div className={styles.tableList}>
                    {routeDetail.map((route) => (
                        <RouteTimelineItem key={route.timestamp} route={route} />
                    ))}
                </div>

                <div className={styles.pagination}>
                    <Pagination.Root
                        total={paginationInfo?.totalPages}
                        value={activePage}
                        onChange={setActivePage}
                        color={vars.colors.primary}
                        boundaries={0}
                    >
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
        </Accordion>
    )
}

export default RouteTimelineSection
