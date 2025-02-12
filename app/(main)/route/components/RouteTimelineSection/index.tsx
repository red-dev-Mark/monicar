import { Group, Pagination, Select } from '@mantine/core'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import RouteTimelineItem from '@/app/(main)/route/components/RouteTimelineItem'
import Accordion from '@/components/common/Accordion'
import { useDisclosure } from '@/hooks/useDisclosure'
import { routeService, vehicleService } from '@/lib/apis'
import { vars } from '@/styles/theme.css'
import { PaginationInfo } from '@/types/common'
import { Route } from '@/types/route'

import * as styles from './styles.css'

const RouteTimelineSection = () => {
    const [activePage, setActivePage] = useState(1)
    const [routeDetail, setRouteDetail] = useState<Route[]>()
    const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>()
    const [interval, setInterval] = useState<string | null>('10')

    const [isComponentVisible, { open: openComponent, close: closeComponent }] = useDisclosure()

    const searchParams = useSearchParams()

    useEffect(() => {
        const getVehicleDatail = async () => {
            try {
                const vehicleNumber = searchParams.get('vehicleNumber') || ''
                const vehicleId = searchParams.get('vehicleId') || ''
                const startDate = searchParams.get('startDate') || ''
                const endDate = searchParams.get('endDate') || ''

                const isValidVehicle = (await vehicleService.getVehicleOperationHistory(vehicleNumber)).isValid
                if (!isValidVehicle) {
                    closeComponent()
                    return
                }

                const response = await routeService.getVehicleRoutesDetail({
                    vehicleId,
                    startTime: startDate,
                    endTime: endDate,
                    page: activePage,
                    interval: Number(interval) * 60 || 60,
                })

                if (!response.isSuccess) return

                const { first, last, page, size, totalElements, totalPages } = response.data
                const { routes } = response.data.content[0]

                setRouteDetail(routes)
                setPaginationInfo({ first, last, page, size, totalElements, totalPages })
                openComponent()
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error)
                    closeComponent()
                }
            }
        }
        getVehicleDatail()
    }, [searchParams])

    useEffect(() => {
        const getVehicleDatail = async () => {
            try {
                const vehicleNumber = searchParams.get('vehicleNumber') || ''
                const vehicleId = searchParams.get('vehicleId') || ''
                const startDate = searchParams.get('startDate') || ''
                const endDate = searchParams.get('endDate') || ''

                const isValidVehicle = (await vehicleService.getVehicleOperationHistory(vehicleNumber)).isValid
                if (!isValidVehicle) return

                const response = await routeService.getVehicleRoutesDetail({
                    vehicleId,
                    startTime: startDate,
                    endTime: endDate,
                    page: activePage,
                    interval: Number(interval) * 60 || 60,
                })

                if (!response.isSuccess) return

                const { first, last, page, size, totalElements, totalPages } = response.data
                const { routes } = response.data.content[0]

                setRouteDetail(routes)
                setPaginationInfo({ first, last, page, size, totalElements, totalPages })
                openComponent()
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error)
                    closeComponent()
                }
            }
        }
        getVehicleDatail()
    }, [searchParams, activePage, interval, openComponent, closeComponent])

    if (!isComponentVisible || !routeDetail || !paginationInfo) return

    return (
        <div className={styles.accordion}>
            <Accordion variant='secondary' title='경로 상세목록'>
                <div className={styles.container}>
                    <div className={styles.selectWrapper}>
                        <Select
                            value={interval}
                            onChange={(value) => {
                                setInterval(value)
                                setActivePage(1)
                            }}
                            data={[
                                { value: '5', label: '5분' },
                                { value: '10', label: '10분' },
                                { value: '30', label: '30분' },
                                { value: '60', label: '1시간' },
                            ]}
                            placeholder='검색 주기'
                            size='md'
                            radius='xl'
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
        </div>
    )
}

export default RouteTimelineSection
