import { Group, Pagination, Select } from '@mantine/core'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import RouteTimelineItem from '@/app/(main)/route/components/RouteTimelineItem'
import Accordion from '@/components/common/Accordion'
import { useQueryParams } from '@/hooks/useQueryParams'
import { routeService } from '@/lib/apis'
import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { vars } from '@/styles/theme.css'
import { PaginationInfo } from '@/types/common'
import { Route } from '@/types/route'

import * as styles from './styles.css'

const RouteTimelineSection = () => {
    // const [activePage, setActivePage] = useState(1)
    const [routeDetail, setRouteDetail] = useState<Route[]>()
    const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>()
    // const [interval, setInterval] = useState<string | null>('10')

    // const [isComponentVisible, { open: openComponent, close: closeComponent }] = useDisclosure()
    const { addQueries, addQuery } = useQueryParams()

    const searchParams = useSearchParams()

    const vehicleId = searchParams.get('vehicleId') || ''
    const vehicleNumber = searchParams.get('vehicleNumber') || ''
    const startDate = searchParams.get('startDate') || ''
    const endDate = searchParams.get('endDate') || ''
    const activePage = searchParams.get('page') || ''
    const interval = searchParams.get('interval') || ''
    const isComponentVisible = vehicleId && vehicleNumber && startDate && endDate && activePage && interval

    useEffect(() => {
        const getVehicleDatail = async () => {
            try {
                if (!isComponentVisible) return

                const response = await routeService.getVehicleRoutesDetail({
                    vehicleId,
                    startTime: startDate,
                    endTime: endDate,
                    page: Number(activePage),
                    interval: Number(interval),
                })

                if (!response.isSuccess) return

                const { first, last, page, size, totalElements, totalPages } = response.data
                const { routes } = response.data.content[0]

                setRouteDetail(routes)
                setPaginationInfo({ first, last, page, size, totalElements, totalPages })
                addQuery('page', String(activePage))
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error)
                }
            }
        }
        getVehicleDatail()
    }, [searchParams, activePage, interval])

    if (!isComponentVisible || !routeDetail || !paginationInfo) return

    return (
        <div className={styles.accordion}>
            <Accordion variant='secondary' title='경로 상세목록'>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.vehicleNumber}>검색 차량 : {addSpaceVehicleNumber(vehicleNumber)}</h1>
                        <Select
                            value={String(Number(interval) / 60)}
                            onChange={(value) => {
                                if (!value) return
                                addQueries({ page: '1', interval: Number(value) * 60 })
                            }}
                            data={[
                                { value: '5', label: '5분' },
                                { value: '10', label: '10분' },
                                { value: '30', label: '30분' },
                                { value: '60', label: '1시간' },
                            ]}
                            placeholder='검색 주기'
                            size='sm'
                            radius='md'
                            checkIconPosition='right'
                            allowDeselect={false}
                            styles={{
                                input: {
                                    width: '140px',
                                    color: vars.colors.black,
                                    outline: 'none',
                                },
                            }}
                        />
                    </div>

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
                            value={Number(activePage)}
                            onChange={(page) => {
                                addQuery('page', String(page))
                            }}
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
        </div>
    )
}

export default RouteTimelineSection
