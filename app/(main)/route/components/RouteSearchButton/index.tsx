import { Loader, Tooltip } from '@mantine/core'
import { DatesRangeValue } from '@mantine/dates'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import SquareButton from '@/components/common/Button/SquareButton'
import { MAP_CONFIG } from '@/constants/map'
import { useLoading } from '@/hooks/useLoading'
import { useMapStatus } from '@/hooks/useMapStatus'
import { useQueryParams } from '@/hooks/useQueryParams'
import { routeService } from '@/lib/apis'
import { getVehicleOperationInfo } from '@/lib/services/vehicle'
import { formatISODateToISOString } from '@/lib/utils/date'
import { normalizeRoutes } from '@/lib/utils/normalize'
import { vars } from '@/styles/theme.css'
import { LatLng, MapRefType } from '@/types/map'

interface RouteSearchButtonProps {
    mapRef: MapRefType
    disabled: { isVehicleNumberDirty: boolean; isRouteSearchable: boolean }
    onRoutesChange: (paths: LatLng[]) => void
    onError?: (message: string) => void
}

const RouteSearchButton = ({ mapRef, disabled, onRoutesChange, onError }: RouteSearchButtonProps) => {
    const [isSearchingRoute, startSearchingRoute, finishSearchingRoute] = useLoading()

    const { controlMapStatus } = useMapStatus(mapRef.current)
    const { addQueries, clearAllQueries } = useQueryParams()

    const searchParams = useSearchParams()

    const vehicleId = searchParams.get('vehicleId') || ''
    const vehicleNumber = searchParams.get('vehicleNumber') || ''
    const startDate = searchParams.get('startDate') || ''
    const endDate = searchParams.get('endDate') || ''
    const page = searchParams.get('page')
    const interval = searchParams.get('interval')
    const dateRange: DatesRangeValue = [startDate ? new Date(startDate) : null, endDate ? new Date(endDate) : null]

    useEffect(() => {
        if (vehicleId && startDate && endDate) {
            handleRouteSearch()
        }
    }, [vehicleId])

    const handleRouteSearch = async () => {
        const [startDate, endDate] = dateRange

        if (!vehicleId || !startDate || !endDate) return

        try {
            startSearchingRoute()

            const operationPeriodResponse = await getVehicleOperationInfo(vehicleNumber)
            if (!operationPeriodResponse?.data?.vehicleId) {
                throw new Error('해당 차량을 찾을 수 없습니다')
            }

            const {
                data: { vehicleId: newVehicldId },
            } = operationPeriodResponse

            if (vehicleId !== String(newVehicldId)) {
                throw new Error('해당 차량을 찾을 수 없습니다')
            }

            const result = await routeService.getVehicleRoutesData({ vehicleId, dateRange })
            if (!result?.data || !result.isSuccess) throw new Error(result.error || '경로 조회에 실패했습니다')

            const {
                data: { routes },
            } = result

            if (routes) {
                const normalizedRoutes = normalizeRoutes(routes)
                onRoutesChange(normalizedRoutes)

                if (!normalizedRoutes?.length) throw new Error('해당 기간의 경로 정보가 없습니다')

                const endPosition = normalizedRoutes[normalizedRoutes.length - 1]
                controlMapStatus(endPosition, MAP_CONFIG.ROUTE.ZOOM_INCREMENT)
                updateUrlAndRouteInfo(normalizedRoutes)
            }
        } catch (error) {
            if (error instanceof Error) {
                clearAllQueries()
                onError?.(error.message)
            }
        } finally {
            finishSearchingRoute()
        }
    }

    const updateUrlAndRouteInfo = (routes: LatLng[]) => {
        addQueries({
            startDate: formatISODateToISOString(dateRange[0]),
            endDate: formatISODateToISOString(dateRange[1]),
            startLat: routes[0].lat,
            startLng: routes[0].lng,
            endLat: routes[routes.length - 1].lat,
            endLng: routes[routes.length - 1].lng,
            page: page ? page : 1,
            interval: interval ? interval : 600,
        })
    }

    const { isVehicleNumberDirty, isRouteSearchable } = disabled
    const isButtonDisable = !!isVehicleNumberDirty || !isRouteSearchable || !!isSearchingRoute

    return (
        <div>
            <Tooltip
                color={vars.colors.gray[800]}
                arrowSize={6}
                label={isVehicleNumberDirty ? '차량번호를 먼저 검색해주세요' : '기간을 먼저 선택해주세요'}
                withArrow
                position='top'
                disabled={!(isVehicleNumberDirty || !isRouteSearchable)}
            >
                <div>
                    <SquareButton disabled={isButtonDisable} onClick={handleRouteSearch}>
                        {isSearchingRoute ? <Loader color={vars.colors.white} size='sm' /> : '경로 보기'}
                    </SquareButton>
                </div>
            </Tooltip>
        </div>
    )
}

export default RouteSearchButton
