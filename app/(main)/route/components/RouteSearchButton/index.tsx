import { Loader, Tooltip } from '@mantine/core'
import { useEffect } from 'react'

import SquareButton from '@/components/common/Button/SquareButton'
import { MAP_CONFIG } from '@/constants/map'
import { useLoading } from '@/hooks/useLoading'
import { useMapStatus } from '@/hooks/useMapStatus'
import { useQueryParams } from '@/hooks/useQueryParams'
import { routeService } from '@/lib/apis'
import { formatISODateToISOString } from '@/lib/utils/date'
import { normalizeRoutes } from '@/lib/utils/normalize'
import { vars } from '@/styles/theme.css'
import { LatLng, MapRefType } from '@/types/map'

interface RouteSearchButtonProps {
    mapRef: MapRefType
    vehicleId?: string | undefined
    dateRange: [Date | null, Date | null]
    disabled: boolean
    onRoutesChange: (paths: LatLng[]) => void
    onError?: (message: string) => void
}

const RouteSearchButton = ({
    mapRef,
    vehicleId,
    dateRange,
    disabled,
    onRoutesChange,
    onError,
}: RouteSearchButtonProps) => {
    const [isSearchingRoute, startSearchingRoute, finishSearchingRoute] = useLoading()

    const { controlMapStatus } = useMapStatus(mapRef.current)
    const { addQueries, clearAllQueries } = useQueryParams()

    useEffect(() => {
        if (vehicleId && mapRef.current) {
            handleRouteSearch()
        }
    }, [vehicleId, mapRef.current])

    const handleRouteSearch = async () => {
        const [startDate, endDate] = dateRange
        if (!vehicleId || !startDate || !endDate) return

        try {
            startSearchingRoute()
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
                onError?.(error.message)
                clearAllQueries()
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
        })
    }

    return (
        <div>
            <Tooltip
                color={vars.colors.gray[800]}
                arrowSize={6}
                label='차량번호를 먼저 검색해주세요'
                withArrow
                position='top'
                disabled={!disabled}
            >
                <div>
                    <SquareButton disabled={disabled || isSearchingRoute} onClick={handleRouteSearch}>
                        {isSearchingRoute ? <Loader color={vars.colors.white} size='sm' /> : '경로 보기'}
                    </SquareButton>
                </div>
            </Tooltip>
        </div>
    )
}

export default RouteSearchButton
